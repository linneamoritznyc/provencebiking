/**
 * Provence by Bike — Main Application
 * Handles map initialization, route display, POI markers, filters, and UI interactions.
 */
(function () {
  "use strict";

  // ============ STATE ============
  let map;
  let routeLayers = {};       // route id -> L.polyline
  let poiMarkers = {};        // poi id -> L.marker
  let poiLayerGroups = {};    // category -> L.layerGroup
  let activeRoute = null;
  let activeFilters = new Set(Object.keys(POI_CATEGORIES));

  // ============ HELPERS ============
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // ============ MAP SETUP ============
  function initMap() {
    map = L.map("map", {
      center: [43.85, 5.3],
      zoom: 8,
      zoomControl: false,
      attributionControl: true,
      tap: true
    });

    // Add zoom control to top-right (better mobile placement)
    L.control.zoom({ position: "topright" }).addTo(map);

    // Tile layers
    var osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    });

    var topoLayer = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
      maxZoom: 17
    });

    // Default layer
    osmLayer.addTo(map);

    // Layer control
    L.control.layers({
      "Street Map": osmLayer,
      "Terrain": topoLayer
    }, null, { position: "topright" }).addTo(map);
  }

  // ============ ROUTES ============
  function renderRoutes() {
    ROUTES.forEach(function (route) {
      var latlngs = route.coordinates.map(function (c) { return [c[0], c[1]]; });
      var polyline = L.polyline(latlngs, {
        color: route.color,
        weight: 4,
        opacity: 0.8,
        smoothFactor: 1
      }).addTo(map);

      polyline.on("click", function () {
        selectRoute(route.id);
      });

      // Start marker
      var startIcon = L.divIcon({
        className: "custom-marker",
        html: '<div style="background:' + route.color + ';width:26px;height:26px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;">' + route.stages[0].from.charAt(0) + '</div>',
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      L.marker(latlngs[0], { icon: startIcon })
        .addTo(map)
        .bindPopup('<div class="popup-title">' + route.name + '</div><div class="popup-category">Start: ' + route.stages[0].from + '</div><div class="popup-link" onclick="window.selectRoute(\'' + route.id + '\')">View route details</div>');

      routeLayers[route.id] = polyline;
    });
  }

  function renderRouteList() {
    var container = document.getElementById("routeList");
    var html = "";

    ROUTES.forEach(function (route) {
      var badgeClass = "badge-" + route.difficulty;
      html += '<div class="route-card" data-route="' + route.id + '" onclick="window.selectRoute(\'' + route.id + '\')">' +
        '<div style="position:absolute;left:0;top:0;bottom:0;width:4px;background:' + route.color + ';"></div>' +
        '<div class="route-card-header">' +
          '<span class="route-card-name">' + route.name + '</span>' +
          '<span class="route-card-badge ' + badgeClass + '">' + route.difficulty + '</span>' +
        '</div>' +
        '<div class="route-card-meta">' +
          '<span>' + route.days + ' days</span>' +
          '<span>' + route.distance + ' km</span>' +
        '</div>' +
      '</div>';
    });

    container.innerHTML = html;
  }

  window.selectRoute = function (routeId) {
    var route = ROUTES.find(function (r) { return r.id === routeId; });
    if (!route) return;

    // Update active state on cards
    document.querySelectorAll(".route-card").forEach(function (card) {
      card.classList.toggle("active", card.dataset.route === routeId);
    });

    // Highlight route on map
    Object.keys(routeLayers).forEach(function (id) {
      routeLayers[id].setStyle({
        weight: id === routeId ? 6 : 3,
        opacity: id === routeId ? 1 : 0.4
      });
      if (id === routeId) {
        routeLayers[id].bringToFront();
      }
    });

    // Fit map to route (extra bottom padding on mobile for bottom sheet)
    var padding = isMobile() ? [40, 40, 200, 40] : [40, 40];
    map.fitBounds(routeLayers[routeId].getBounds(), { padding: padding });

    // Show detail panel
    showRouteDetail(route);
    activeRoute = routeId;

    // Close sidebar on mobile
    closeSidebar();
  };

  function showRouteDetail(route) {
    var panel = document.getElementById("detailPanel");
    var content = document.getElementById("detailContent");

    var badgeClass = "badge-" + route.difficulty;

    var stagesHtml = route.stages.map(function (stage) {
      return '<div class="stage-card">' +
        '<div class="stage-day">Day ' + stage.day + '</div>' +
        '<div class="stage-title">' + stage.from + ' &rarr; ' + stage.to + '</div>' +
        '<div class="stage-stats">' +
          '<span>' + stage.km + ' km</span>' +
          '<span>&uarr; ' + stage.climb + 'm climbing</span>' +
        '</div>' +
        '<div class="stage-desc">' + stage.description + '</div>' +
      '</div>';
    }).join("");

    var tipsHtml = route.tips.map(function (tip) {
      return "<li>" + tip + "</li>";
    }).join("");

    content.innerHTML =
      '<div class="route-detail-header">' +
        '<div class="route-detail-name">' + route.name + '</div>' +
        '<div class="route-detail-meta">' +
          '<span>' + route.days + ' days</span>' +
          '<span>' + route.distance + ' km total</span>' +
          '<span class="route-card-badge ' + badgeClass + '">' + route.difficulty + '</span>' +
        '</div>' +
        '<div class="route-detail-summary">' + route.summary + '</div>' +
      '</div>' +
      '<div class="stage-list">' +
        '<h3 style="font-size:15px;margin-bottom:10px;">Daily Stages</h3>' +
        stagesHtml +
      '</div>' +
      '<div class="route-tips">' +
        '<h4>Route Tips</h4>' +
        '<ul>' + tipsHtml + '</ul>' +
      '</div>';

    panel.classList.remove("expanded");
    panel.classList.add("open");
  }

  // ============ POI MARKERS ============
  function createPOIMarker(poi) {
    var cat = POI_CATEGORIES[poi.category];
    if (!cat) return null;

    var colorMap = {
      green: "#27ae60",
      gold: "#f39c12",
      blue: "#3498db",
      purple: "#9b59b6",
      burgundy: "#8b1a2b",
      teal: "#16a085"
    };
    var bgColor = colorMap[cat.markerColor] || "#666";

    var icon = L.divIcon({
      className: "custom-marker",
      html: '<div style="background:' + bgColor + ';width:24px;height:24px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 4px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;">' + cat.icon + '</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    var marker = L.marker([poi.lat, poi.lng], { icon: icon });

    var popupHtml =
      '<div class="popup-title">' + poi.name + '</div>' +
      '<div class="popup-category">' + cat.label + ' &middot; ' + poi.type + '</div>' +
      '<div class="popup-desc">' + poi.description + '</div>' +
      (poi.price ? '<div style="font-size:12px;font-weight:600;color:#4a7c59;">' + poi.price + '</div>' : '') +
      '<div class="popup-link" onclick="window.showPOIDetail(\'' + poi.id + '\')">More info</div>';

    marker.bindPopup(popupHtml);
    return marker;
  }

  function renderPOIs() {
    // Group by category
    Object.keys(POI_CATEGORIES).forEach(function (cat) {
      poiLayerGroups[cat] = L.layerGroup();
    });

    POIS.forEach(function (poi) {
      var marker = createPOIMarker(poi);
      if (marker && poiLayerGroups[poi.category]) {
        marker.addTo(poiLayerGroups[poi.category]);
        poiMarkers[poi.id] = marker;
      }
    });

    // Add all to map by default
    Object.keys(poiLayerGroups).forEach(function (cat) {
      poiLayerGroups[cat].addTo(map);
    });
  }

  window.showPOIDetail = function (poiId) {
    var poi = POIS.find(function (p) { return p.id === poiId; });
    if (!poi) return;

    var cat = POI_CATEGORIES[poi.category];
    var panel = document.getElementById("detailPanel");
    var content = document.getElementById("detailContent");

    var routeNames = (poi.nearRoute || []).map(function (rid) {
      var r = ROUTES.find(function (route) { return route.id === rid; });
      return r ? r.name : rid;
    }).join(", ");

    content.innerHTML =
      '<div class="poi-detail-header">' +
        '<span class="poi-detail-icon">' + cat.icon + '</span>' +
        '<div>' +
          '<div class="poi-detail-name">' + poi.name + '</div>' +
          '<div class="poi-detail-type">' + cat.label + ' &middot; ' + poi.type + '</div>' +
        '</div>' +
      '</div>' +
      (poi.price ? '<div class="poi-detail-price">' + poi.price + '</div>' : '') +
      '<div class="poi-detail-desc">' + poi.description + '</div>' +
      (routeNames ? '<div class="poi-detail-routes"><strong>Near route:</strong> ' + routeNames + '</div>' : '');

    panel.classList.remove("expanded");
    panel.classList.add("open");
  };

  // ============ FILTERS ============
  function renderFilters() {
    var container = document.getElementById("filterGroup");
    var html = "";

    Object.keys(POI_CATEGORIES).forEach(function (cat) {
      var info = POI_CATEGORIES[cat];
      var count = POIS.filter(function (p) { return p.category === cat; }).length;

      html += '<label class="filter-toggle">' +
        '<input type="checkbox" checked data-category="' + cat + '">' +
        '<span class="filter-toggle-icon">' + info.icon + '</span>' +
        '<span class="filter-toggle-label">' + info.label + '</span>' +
        '<span class="filter-toggle-count">' + count + '</span>' +
      '</label>';
    });

    container.innerHTML = html;

    // Bind events
    container.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        var cat = this.dataset.category;
        if (this.checked) {
          activeFilters.add(cat);
          if (poiLayerGroups[cat]) map.addLayer(poiLayerGroups[cat]);
        } else {
          activeFilters.delete(cat);
          if (poiLayerGroups[cat]) map.removeLayer(poiLayerGroups[cat]);
        }
      });
    });
  }

  // ============ SIDEBAR OPEN/CLOSE ============
  function openSidebar() {
    var sidebar = document.getElementById("sidebar");
    var backdrop = document.getElementById("sidebarBackdrop");
    sidebar.classList.add("open");
    if (isMobile()) {
      backdrop.classList.add("visible");
    }
  }

  function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var backdrop = document.getElementById("sidebarBackdrop");
    sidebar.classList.remove("open");
    backdrop.classList.remove("visible");
  }

  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  // ============ DETAIL PANEL CLOSE ============
  function closeDetailPanel() {
    var panel = document.getElementById("detailPanel");
    panel.classList.remove("open");
    panel.classList.remove("expanded");

    // Reset route highlighting
    Object.keys(routeLayers).forEach(function (id) {
      routeLayers[id].setStyle({ weight: 4, opacity: 0.8 });
    });
    document.querySelectorAll(".route-card").forEach(function (card) {
      card.classList.remove("active");
    });
    activeRoute = null;
  }

  // ============ BOTTOM SHEET DRAG (MOBILE) ============
  function initBottomSheetDrag() {
    var panel = document.getElementById("detailPanel");
    var handle = document.getElementById("detailDragHandle");
    var startY = 0;
    var startHeight = 0;
    var isDragging = false;

    handle.addEventListener("touchstart", function (e) {
      isDragging = true;
      startY = e.touches[0].clientY;
      startHeight = panel.getBoundingClientRect().height;
      panel.style.transition = "none";
      e.preventDefault();
    }, { passive: false });

    document.addEventListener("touchmove", function (e) {
      if (!isDragging) return;
      var deltaY = startY - e.touches[0].clientY;
      var newHeight = Math.max(0, startHeight + deltaY);
      var maxHeight = window.innerHeight * 0.9;
      newHeight = Math.min(newHeight, maxHeight);
      panel.style.height = newHeight + "px";
    }, { passive: true });

    document.addEventListener("touchend", function () {
      if (!isDragging) return;
      isDragging = false;
      panel.style.transition = "";

      var currentHeight = panel.getBoundingClientRect().height;
      var windowHeight = window.innerHeight;

      if (currentHeight < 100) {
        // Dragged down far enough — close
        closeDetailPanel();
        panel.style.height = "";
      } else if (currentHeight > windowHeight * 0.65) {
        // Dragged up — expand to full
        panel.classList.add("expanded");
        panel.style.height = "";
      } else {
        // Snap back to default half-height
        panel.classList.remove("expanded");
        panel.style.height = "";
      }
    });
  }

  // ============ MOBILE BOTTOM NAV ============
  function initMobileNav() {
    document.getElementById("mobileNavRoutes").addEventListener("click", function () {
      toggleSidebar();
      // Scroll sidebar to routes section
      var routeSection = document.querySelector(".sidebar-section:first-child");
      if (routeSection) routeSection.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("mobileNavLayers").addEventListener("click", function () {
      toggleSidebar();
      // Scroll sidebar to layers section
      setTimeout(function () {
        var filterSection = document.querySelector(".sidebar-section:nth-child(2)");
        if (filterSection) filterSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });

    document.getElementById("mobileNavAbout").addEventListener("click", function () {
      closeSidebar();
      document.getElementById("aboutModal").classList.add("open");
    });
  }

  // ============ UI INTERACTIONS ============
  function initUI() {
    // Sidebar toggle (hamburger)
    document.getElementById("sidebarToggle").addEventListener("click", function () {
      toggleSidebar();
    });

    // Sidebar backdrop tap to close
    document.getElementById("sidebarBackdrop").addEventListener("click", function () {
      closeSidebar();
    });

    // Detail panel close
    document.getElementById("detailClose").addEventListener("click", function () {
      closeDetailPanel();
    });

    // About modal
    document.getElementById("aboutBtn").addEventListener("click", function () {
      document.getElementById("aboutModal").classList.add("open");
    });
    document.getElementById("aboutClose").addEventListener("click", function () {
      document.getElementById("aboutModal").classList.remove("open");
    });
    document.getElementById("aboutModal").addEventListener("click", function (e) {
      if (e.target === this) this.classList.remove("open");
    });

    // Legend toggle
    document.getElementById("legendToggle").addEventListener("click", function () {
      document.getElementById("legendContent").classList.toggle("open");
    });

    // Close sidebar when clicking map on mobile
    map.on("click", function () {
      if (isMobile()) {
        closeSidebar();
      }
    });

    // Mobile-specific features
    initBottomSheetDrag();
    initMobileNav();

    // Invalidate map size on orientation change
    window.addEventListener("resize", function () {
      if (map) map.invalidateSize();
    });
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        if (map) map.invalidateSize();
      }, 200);
    });
  }

  // ============ INIT ============
  function init() {
    initMap();
    renderRoutes();
    renderRouteList();
    renderPOIs();
    renderFilters();
    initUI();
  }

  // Start when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
