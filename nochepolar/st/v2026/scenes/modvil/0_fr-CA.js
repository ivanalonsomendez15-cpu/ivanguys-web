import { s as sceneApi } from '../../_e310d67a.js';
import { L as LitElement, h as html, i as ifDefined } from '../../_21731fba.js';
import { p as prepareAsset, s as scenesWithColor } from "../../_04b2873d_fr-CA.js";
import { l as loadAnimation, b as buildSafeResize } from '../../_36ce2a0a.js';
import { l as localStorage } from '../../_43929e88.js';
import '../../_e746bcde.js';
import { f as play, l as go, b as preload, t as timeout } from '../../_e1311d95.js';
import { l as load } from '../../_5c45a2b1.js';
import { m as mapstyles } from '../../_f66735ca.js';
import '../../_4be5a540.js';
import { s as scenes } from "../../_3a2cb20e_fr-CA.js";
import '../../_ccf4b423.js';
function installAdjustHandler(handler) {
  let rAF = 0;
  let resize = false;
  const run = () => {
    rAF = 0;
    handler(resize);
    resize = false;
  };
  const dedup = () => {
    if (rAF === 0) {
      rAF = window.requestAnimationFrame(run);
    }
  };
  window.addEventListener('scroll', () => dedup());
  window.addEventListener('resize', () => {
    resize = true;
    dedup();
  });
}
function mobileAndTabletCheck() {
  if ('standalone' in navigator) {
    return true;
  }
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
const animationSoundTriggers = {
  wrapping: {
    1: [{
      sound: "village_wrapping_elfslide",
      time: 35,
      played: 0
    }, {
      sound: "village_wrapping_package1",
      time: 25,
      played: 0
    }, {
      sound: "village_wrapping_package1",
      time: 38,
      played: 0
    }, {
      sound: "village_wrapping_package2",
      time: 53,
      played: 0
    }, {
      sound: "village_wrapping_package2",
      time: 63,
      played: 0
    }, {
      sound: "village_wrapping_package2",
      time: 68,
      played: 0
    }, {
      sound: "village_wrapping_package2",
      time: 88,
      played: 0
    }, {
      sound: "village_wrapping_package1",
      time: 95,
      played: 0
    }, {
      sound: "village_wrapping_elfslide",
      time: 110,
      played: 0
    }],
    2: [{
      sound: "village_wrapping_press",
      time: 33.5,
      played: 0
    }]
  },
  gym: {
    1: [{
      sound: "village_gym_pushup",
      time: 1,
      played: 0
    }]
  },
  kitchen: {
    1: [{
      sound: "village_kitchen_fire",
      time: 20,
      played: 0
    }],
    4: [{
      sound: "village_kitchen_pancake",
      time: 48,
      played: 0
    }]
  },
  nursery: {
    1: [{
      sound: "village_reindeerdaycare_clap",
      time: 45,
      played: 0
    }, {
      sound: "village_reindeerdaycare_clap",
      time: 65,
      played: 0
    }, {
      sound: "village_reindeerdaycare_clap",
      time: 80,
      played: 0
    }]
  },
  android: {
    1: [{
      sound: "village_android_laugh",
      time: 40,
      played: 0
    }]
  },
  greenhouse: {
    2: [{
      sound: "village_greenhouse_swing",
      time: 25,
      played: 0
    }]
  },
  toymaking: {
    2: [{
      sound: "village_toy_making_snowman",
      time: 38,
      played: 0
    }, {
      sound: "village_toy_making_jump",
      time: 74,
      played: 0
    }]
  },
  sciencelab: {
    1: [{
      sound: "village_science_drip",
      time: 28,
      played: 0
    }]
  },
  transithub: {
    1: [{
      sound: "village_transithub_lift_up",
      time: 0,
      played: 0
    }, {
      sound: "village_transithub_lift_down",
      time: 50,
      played: 0
    }, {
      sound: "village_transithub_lift_up",
      time: 75,
      played: 0
    }, {
      sound: "village_transithub_lift_down",
      time: 125,
      played: 0
    }, {
      sound: "village_transithub_lift_up",
      time: 155,
      played: 0
    }, {
      sound: "village_transithub_lift_down",
      time: 200,
      played: 0
    }]
  }
};
const EARTH_RADIUS = 6378137;
const PI_BY_180 = Math.PI / 180;
function mod(x, m) {
  return (x % m + m) % m;
}
function wrap(value, min, max) {
  return mod(value - min, max - min) + min;
}
function degreesToRadians(deg) {
  return deg * PI_BY_180;
}
function radiansToDegrees(rad) {
  return rad / PI_BY_180;
}
function computeHeading(from, to) {
  const fromLat = degreesToRadians(from.lat);
  const fromLng = degreesToRadians(from.lng);
  const toLat = degreesToRadians(to.lat);
  const toLng = degreesToRadians(to.lng);
  const dLng = toLng - fromLng;
  const heading = Math.atan2(Math.sin(dLng) * Math.cos(toLat), Math.cos(fromLat) * Math.sin(toLat) - Math.sin(fromLat) * Math.cos(toLat) * Math.cos(dLng));
  return wrap(radiansToDegrees(heading), -180, 180);
}
function interpolate(from, to, fraction) {
  const fromLat = degreesToRadians(from.lat);
  const fromLng = degreesToRadians(from.lng);
  const toLat = degreesToRadians(to.lat);
  const toLng = degreesToRadians(to.lng);
  const cosFromLat = Math.cos(fromLat);
  const cosToLat = Math.cos(toLat);
  const angle = computeAngleBetween(from, to);
  const sinAngle = Math.sin(angle);
  if (sinAngle < 1E-6) {
    return from;
  }
  const a = Math.sin((1 - fraction) * angle) / sinAngle;
  const b = Math.sin(fraction * angle) / sinAngle;
  const x = a * cosFromLat * Math.cos(fromLng) + b * cosToLat * Math.cos(toLng);
  const y = a * cosFromLat * Math.sin(fromLng) + b * cosToLat * Math.sin(toLng);
  const z = a * Math.sin(fromLat) + b * Math.sin(toLat);
  const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
  const lng = Math.atan2(y, x);
  return {
    lat: radiansToDegrees(lat),
    lng: radiansToDegrees(lng)
  };
}
function computeAngleBetween(from, to) {
  const fromLat = degreesToRadians(from.lat);
  const fromLng = degreesToRadians(from.lng);
  const toLat = degreesToRadians(to.lat);
  const toLng = degreesToRadians(to.lng);
  const dLat = fromLat - toLat;
  const dLng = fromLng - toLng;
  return 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(dLat / 2), 2) + Math.cos(fromLat) * Math.cos(toLat) * Math.pow(Math.sin(dLng / 2), 2)));
}
function computeDistanceBetween(from, to, radius = EARTH_RADIUS) {
  return computeAngleBetween(from, to) * radius;
}
const lerp = (from, to, ratio) => {
  const delta = to - from;
  return from + delta * ratio;
};
const inverseLerp = (from, to, value) => {
  const range = to - from;
  return (value - from) / range;
};
const polylineColor = '#22a528';
const polylineWeight = 2;
const trailLength = 20;
const routeHourDuration = 25;
const PRESENTS_TRANSIT = 0.3;
const PRESENTS_IN_CITY = 0.7;
const northpoleLocation = {
  lat: 84.6,
  lng: 168
};
async function destinationsFor(url) {
  const r = await fetch(url);
  const data = await r.json();
  return data['destinations'] || [];
}
async function fetchRoute(url, year = new Date().getFullYear()) {
  const from = +Date.UTC(year, 11, 24, 10, 0, 0);
  const to = function () {
    const t = new Date(+from);
    t.setHours(t.getHours() + routeHourDuration);
    return +t;
  }();
  const langUrl = url.replace('|LANG|', document.documentElement.lang || 'en');
  const fallbackUrl = url.replace('|LANG|', 'en');
  let destinations;
  try {
    destinations = await destinationsFor(langUrl);
  } catch (e) {
    console.warn('failed to fetch route', langUrl, e);
    try {
      destinations = await destinations(fallbackUrl);
    } catch (e) {
      console.warn('failed to fetch fallback', fallbackUrl, e);
      window.gtag('event', 'tracker', {
        action: 'failure',
        label: 'destinations'
      });
    }
  }
  if (!destinations || !destinations.length) {
    return destinations || [];
  }
  const actualFrom = destinations[0].departure;
  const actualTo = destinations[destinations.length - 1].arrival;
  console.info('range', from, to, 'vs actual', actualFrom, actualTo);
  const skew = value => {
    if (value === 0) {
      return value;
    }
    const ratio = inverseLerp(actualFrom, actualTo, value);
    return lerp(from, to, ratio);
  };
  destinations.forEach(destination => {
    destination.departure = skew(destination.departure);
    destination.arrival = skew(destination.arrival);
  });
  return destinations;
}
class DestinationsCache {
  constructor(listener) {
    if (localStorage['destinations']) {
      try {
        this._destinations = JSON.parse(localStorage['destinations']);
        if (!this._destinations.length) {
          throw new Error('trigger exception block');
        }
      } catch (e) {
        this._destinations = null;
        localStorage['routeUrl'] = '';
      }
    }
    this._task = null;
    this._listener = listener;
    if (this._destinations) {
      window.gtag('event', 'tracker', {
        action: 'cache-hit',
        label: 'destinations'
      });
      this._listener(this._destinations);
    }
  }
  get destinations() {
    if (this._task) {
      return this._task;
    }
    return Promise.resolve(this._destinations || []);
  }
  set routeUrl(routeUrl) {
    if (localStorage['routeUrl'] === routeUrl) {
      return;
    }
    localStorage['routeUrl'] = routeUrl;
    const p = fetchRoute(routeUrl).then(destinations => {
      if (this._task === p) {
        this._destinations = destinations;
        localStorage['destinations'] = JSON.stringify(destinations);
        this._listener(destinations);
        this._task = null;
        window.gtag('event', 'tracker', {
          action: 'fetch',
          label: 'destinations'
        });
      }
      return destinations;
    });
    this._task = p;
  }
  get routeUrl() {
    return routeUrl;
  }
}
function elementMapsOverlay(layer = 'floatPane') {
  return new class extends google.maps.OverlayView {
    constructor() {
      super();
      this._position = null;
      this._container = document.createElement('div');
      this._container.style.willChange = 'transform';
      this._container.style.background = 'red';
      this._container.style.width = '0px';
      this._container.addEventListener('click', ev => ev.stopPropagation());
    }
    onAdd() {
      const n = this.getPanes()[layer];
      n.append(this._container);
    }
    onRemove() {
      const n = this.getPanes()[layer];
      n.removeChild(this._container);
    }
    set position(latLng) {
      this._position = latLng;
      this.draw();
    }
    get position() {
      return this._position;
    }
    get container() {
      return this._container;
    }
    draw() {
      const projection = this.getProjection();
      if (!projection || !this._position) {
        this._container.hidden = true;
        return;
      }
      this._container.hidden = false;
      const pos = projection.fromLatLngToDivPixel(this._position);
      this._container.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }
  }();
}
class DataManager {
  constructor(destinations) {
    this._time = 0;
    this._nextOrCurrentIndex = 0;
    this._destinations = destinations;
    this._destinationsByKey = {};
    destinations.forEach(destination => {
      this._destinationsByKey[destination.id] = destination;
    });
    if (this._destinations.length === 0) {
      const year = new Date().getFullYear();
      const countdownTo = +Date.UTC(year, 11, 24, 10, 0, 0);
      this._destinations = [{
        id: 'takeoff',
        location: northpoleLocation,
        presentsDelivered: 0,
        arrival: 0,
        departure: +countdownTo,
        city: 'Santa\'s Village',
        region: 'North Pole',
        distance: 0,
        details: {
          timezone: 0
        }
      }];
    } else {
      let previousLocation = destinations[0].location;
      let totalDistance = 0;
      destinations.forEach(destination => {
        totalDistance += computeDistanceBetween(previousLocation, destination.location);
        destination.distance = totalDistance;
        previousLocation = destination.location;
      });
    }
    this._details = null;
  }
  closestArrival(userLocation) {
    if (userLocation === null) {
      const year = new Date(this._destinations[0].departure).getFullYear();
      const targetDate = new Date(year, 11, 25);
      const target = +targetDate;
      const userOffset = targetDate.getTimezoneOffset() * -60;
      let cands = this._destinations.map(destination => {
        return {
          timezoneDelta: Math.abs(userOffset - destination.details.timezone),
          arrivalDelta: Math.abs(target - destination.arrival),
          id: destination.id,
          arrival: destination.arrival
        };
      });
      cands.sort((left, right) => left.timezoneDelta - right.timezoneDelta);
      const closestDelta = cands[0].timezoneDelta;
      let valid;
      for (valid = 1; valid < cands.length; ++valid) {
        if (cands[valid].timezoneDelta !== closestDelta) {
          break;
        }
      }
      cands = cands.slice(0, valid);
      cands.sort((left, right) => left.arrivalDelta - right.arrivalDelta);
      if (this._destinations.length > 1) {
        window.gtag('event', 'tracker', {
          action: 'timezone-guess',
          label: 'destinations',
          value: cands[0].id
        });
        console.info('nearest stop (tz):', cands[0].id);
      }
      return cands[0].arrival;
    }
    let index = 0;
    let bestAngle = 100.0;
    for (let i = 1; i < this._destinations.length; ++i) {
      const candAngle = computeAngleBetween(userLocation, this._destinations[i].location);
      if (candAngle < bestAngle) {
        bestAngle = candAngle;
        index = i;
      }
    }
    if (this._destinations.length > 1) {
      console.info('nearest stop (ip):', this._destinations[index].id);
    }
    return this._destinations[index].arrival;
  }
  get range() {
    if (this._destinations.length === 1) {
      const only = this._destinations[0];
      return {
        from: only.departure,
        to: only.departure
      };
    }
    return {
      from: this._destinations[0].departure,
      to: this._destinations[this._destinations.length - 1].arrival
    };
  }
  stop(i) {
    if (typeof i !== 'number') {
      return this._destinationsByKey[i] || null;
    }
    if (i < 0) {
      i = this._destinations.length - i;
    }
    return this._destinations[i] || null;
  }
  get length() {
    return this._destinations.length;
  }
  get details() {
    if (this._details === null) {
      this._details = this._buildDetails();
    }
    return this._details;
  }
  _buildDetails() {
    if (this._nextOrCurrentIndex === 0) {
      return {
        raw: this._destinations[0],
        visibleTo: 0,
        location: northpoleLocation,
        presents: 0,
        distance: 0,
        heading: 0,
        stop: true,
        home: true,
        next: Math.max(0, this._destinations[0].departure - this._time)
      };
    }
    const curr = this._destinations[this._nextOrCurrentIndex];
    const prev = this._destinations[this._nextOrCurrentIndex - 1];
    if (this._time >= curr.arrival) {
      const ratio = PRESENTS_TRANSIT + inverseLerp(curr.arrival, curr.departure, this._time) * PRESENTS_IN_CITY;
      return {
        raw: curr,
        visibleTo: this._nextOrCurrentIndex,
        location: curr.location,
        presents: Math.round(lerp(prev.presentsDelivered, curr.presentsDelivered, ratio)),
        distance: curr.distance,
        heading: computeHeading(prev.location, curr.location),
        stop: true,
        home: this._nextOrCurrentIndex + 1 >= this._destinations.length,
        next: curr.departure - this._time
      };
    }
    const flightRatio = inverseLerp(prev.departure, curr.arrival, this._time);
    const presentsRatio = flightRatio * PRESENTS_TRANSIT;
    const location = interpolate(prev.location, curr.location, flightRatio);
    return {
      raw: curr,
      visibleTo: this._nextOrCurrentIndex - 1,
      location,
      presents: Math.round(lerp(prev.presentsDelivered, curr.presentsDelivered, presentsRatio)),
      distance: prev.distance + computeDistanceBetween(prev.location, location),
      heading: computeHeading(prev.location, curr.location),
      stop: false,
      home: false,
      next: curr.arrival - this._time
    };
  }
  set now(time) {
    time = +time || 0;
    if (time === this._time) {
      return;
    }
    this._details = null;
    if (time < this._time) {
      this._nextOrCurrentIndex = 0;
    }
    this._time = time;
    let i = this._nextOrCurrentIndex;
    while (i < this._destinations.length) {
      if (time <= this._destinations[i].departure) {
        this._nextOrCurrentIndex = i;
        break;
      }
      ++i;
    }
    if (i === this._destinations.length) {
      this._nextOrCurrentIndex = this._destinations.length - 1;
    }
  }
  get now() {
    return this._time;
  }
}
class StopManager {
  constructor(map, manager, listener) {
    this._map = map;
    this._visibleTo = 0;
    this._listener = listener;
    const markerIcon = {
      url: "/ivanguys-web/nochepolar/st/v2026/img/tracker/marker.png",
      size: new google.maps.Size(15, 18),
      scaledSize: new google.maps.Size(15, 18)
    };
    const homeIcon = {
      url: "/ivanguys-web/nochepolar/st/v2026/img/tracker/northpole.png",
      size: new google.maps.Size(132, 100),
      scaledSize: new google.maps.Size(66, 50),
      anchor: new google.maps.Point(33, 25)
    };
    this._markers = [];
    for (let i = 0; i < manager.length; ++i) {
      const {
        id,
        location,
        city,
        region
      } = manager.stop(i);
      const isHome = id === 'takeoff';
      const marker = new google.maps.Marker({
        position: location,
        map,
        icon: isHome ? homeIcon : markerIcon,
        visible: i === 0,
        title: `${city}, ${region}`
      });
      marker.addListener('click', () => listener(id));
      this._markers.push(marker);
    }
    this._activeTrail = new google.maps.Polyline({
      geodesic: true,
      strokeColor: polylineColor,
      strokeWeight: polylineWeight,
      map
    });
    this._trail = [];
    for (let i = 0; i < trailLength; ++i) {
      const polyline = new google.maps.Polyline({
        geodesic: true,
        strokeColor: polylineColor,
        strokeWeight: polylineWeight,
        strokeOpacity: 1 - i / trailLength,
        map
      });
      this._trail.push(polyline);
    }
    this._manager = manager;
  }
  update() {
    const details = this._manager.details;
    const delta = details.visibleTo - this._visibleTo;
    const reverseTime = delta < 0;
    if (reverseTime) {
      for (let i = details.visibleTo + 1; i <= this._visibleTo; ++i) {
        this._markers[i].setVisible(false);
      }
    } else {
      for (let i = this._visibleTo; i <= details.visibleTo; ++i) {
        this._markers[i].setVisible(true);
      }
    }
    if (delta) {
      const usable = Math.min(details.visibleTo, trailLength);
      let i = 0;
      if (!details.home) {
        for (i = 0; i < usable; ++i) {
          const polyline = this._trail[i];
          polyline.setPath([this._manager.stop(details.visibleTo - i).location, this._manager.stop(details.visibleTo - i - 1).location]);
        }
      }
      while (i < trailLength) {
        this._trail[i].setPath([]);
        ++i;
      }
    }
    if (details.stop) {
      this._activeTrail.setPath([]);
    } else {
      const last = this._manager.stop(details.visibleTo);
      this._activeTrail.setPath([last.location, details.location]);
    }
    this._visibleTo = details.visibleTo;
  }
  destroy() {
    this._markers.forEach(marker => marker.setMap(null));
  }
}
const sheet$a = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$a.replaceSync(":host{display:inline-block}.row{display:flex;align-items:stretch;font-weight:500;color:#fff;cursor:pointer}.row label{display:flex;align-items:center;margin-left:6px;cursor:inherit}.row label:empty{margin:0}button.arrow{width:var(--arrow-dim, 56px);height:var(--arrow-dim, 56px);border:none;box-shadow:inset -6px -6px 0 -4px #eff1f4,0 0 0 8px rgba(0,0,0,.1);background:#fff;border-radius:1000px;margin:8px;cursor:pointer;will-change:box-shadow;transition:box-shadow .15s ease-in-out;display:flex;align-items:center;justify-content:center;position:relative;font-size:0}.row:hover button.arrow{box-shadow:inset 0 0 2px 2px #eff1f4,0 0 0 12px rgba(0,0,0,.07)}button.arrow::before{z-index:-1;content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;border:2px solid rgba(0,0,0,.08);opacity:0}button.arrow:focus{outline:0}button.arrow:focus:focus-visible{box-shadow:inset 0 0 2px 2px #eff1f4,0 0 0 12px rgba(0,0,0,.24)}button.arrow:focus:focus-visible::after{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOSAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuODMwMjcgLTcuMDY4MDFlLTA3TDkuODM4NjggNi45OTAwOEwxNi44NDcxIC05LjQxMDY2ZS0wOEwxOSAyLjE1MjkyTDkuODM4NjggMTEuMzE0MkwwLjY3NzM2IDIuMTUyOTFMMi44MzAyNyAtNy4wNjgwMWUtMDdaIiBmaWxsPSIjNTBBNEZGIi8+Cjwvc3ZnPg==\")}button.arrow:focus::before{opacity:1}button.arrow::after{content:\"\";width:calc(var(--arrow-dim, 56px) * 0.4);height:calc(var(--arrow-dim, 56px) * 0.4);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOSAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuODMwMjcgLTcuMDY4MDFlLTA3TDkuODM4NjggNi45OTAwOEwxNi44NDcxIC05LjQxMDY2ZS0wOEwxOSAyLjE1MjkyTDkuODM4NjggMTEuMzE0MkwwLjY3NzM2IDIuMTUyOTFMMi44MzAyNyAtNy4wNjgwMWUtMDdaIiBmaWxsPSIjOUZDRUZGIi8+Cjwvc3ZnPg==\");background-size:contain;background-position:center;transition:transform .15s ease-in-out}.row:hover button.arrow::after{transform:translateY(2px)}button.arrow.left::after{transform:rotate(90deg)}.row:hover button.arrow.left::after{transform:rotate(90deg) translateY(2px)}button.arrow.right::after{transform:rotate(-90deg)}.row:hover button.arrow.right::after{transform:rotate(-90deg) translateY(2px)}button.arrow.up::after{transform:rotate(180deg)}.row:hover button.arrow.up::after{transform:rotate(180deg) translateY(2px)}");
class ModvilArrowElement extends LitElement {
  static get styles() {
    return [sheet$a];
  }
  static get properties() {
    return {
      target: {
        type: String
      },
      dir: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this._uniqueId = '_id_' + Math.random();
  }
  render() {
    return html`
<div class="row">
  <button aria-label="Scroll ${this.dir} to ${this.target}" id=${this._uniqueId} class="arrow ${this.dir}" @click=${this._onClick}></button>
  <label for=${this._uniqueId}><slot></slot></label>
</div>
`;
  }
  _onClick() {
    if (!this.target) {
      return;
    }
    let target;
    if (typeof this.target === 'string') {
      target = document.getElementById(this.target);
      if (!target) {
        return;
      }
    } else {
      target = this.target;
    }
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}
customElements.define('modvil-arrow', ModvilArrowElement);
const sheet$9 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$9.replaceSync(":host{display:block;position:relative}main{position:relative;overflow:hidden;background:transparent center no-repeat;background-size:contain;pointer-events:none;min-height:800px}main::after{content:\"\";padding-bottom:var(--module-ratio, 90%);position:relative;display:block}.divider{height:72px;background:#eee center repeat-x;box-shadow:0 0 0 2px rgba(0,0,0,.125);position:relative;z-index:1000000}:host([no-divider]) .divider{display:none}main>svg,main>img,main>div.anim{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;transition:opacity .125s ease-in-out;opacity:1;object-fit:cover}.loading{opacity:0}::slotted(santa-card){pointer-events:auto}.cards{top:0;bottom:0}@media(max-width: 768px){:host(:not([mode])) main{display:flex;justify-content:center}:host(:not([mode])) .cards{max-width:85vw;width:420px;min-width:280px;display:flex;flex-flow:column;justify-content:center}}@media(min-width: 769px){:host(:not([mode])) ::slotted(santa-card){position:absolute;top:var(--y, 50%);left:var(--x, 50%);transform:translate(-50%, -50%)}}:host([mode=movies]) main{display:flex;justify-content:center;overflow-x:scroll}:host([mode=movies]) .cards{display:flex;flex-flow:row;justify-content:center;align-items:center;padding:16px}@media(max-width: 1024px){:host([mode=movies]) .cards{flex-flow:column}}:host([mode=movies]) ::slotted(santa-card){margin:0 1em;min-width:240px;display:inline-block;padding-bottom:20px}:host([mode=android]) main{display:flex;justify-content:center}:host([mode=android]) .cards{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;max-width:100vw;width:820px}:host([mode=android]) ::slotted(santa-card){align-self:center !important;justify-self:center !important;padding:0 !important}");
const assetPath = "/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/modules/";
const noop = () => {};
class ModvilModuleElement extends LitElement {
  static get styles() {
    return [sheet$9];
  }
  static get properties() {
    return {
      color: {
        type: String
      },
      parts: {
        type: String
      },
      mode: {
        type: String
      },
      load: {
        type: Boolean
      },
      ratio: {
        type: Number
      }
    };
  }
  constructor() {
    super();
    this.parts = '';
    this.mode = '';
    this.ratio = null;
    this.load = false;
    this._cardsLayer = -1;
    this._partsCache = [];
  }
  _loadPart(type, index) {
    const layer = null;
    const id = this.id;
    const base = assetPath + id;
    switch (type) {
      case 'cards':
        const node = document.createElement('div');
        node.className = 'cards';
        const slot = document.createElement('slot');
        node.append(slot);
        return {
          node
        };
      case 'static-png':
      case 'static-svg':
        {
          const ext = type.split('-')[1];
          const img = document.createElement('img');
          img.src = `${base}/${index}.${ext}`;
          img.style.zIndex = layer;
          img.className = 'loading';
          img.onload = () => img.classList.remove('loading');
          return {
            node: img
          };
        }
      case 'mobile':
        {
          const img = document.createElement('img');
          img.src = `${base}/mobile.png`;
          img.style.zIndex = layer;
          img.className = 'loading mobile';
          img.onload = () => img.classList.remove('loading');
          return {
            node: img
          };
        }
      case 'loop':
      case 'scroll':
        {
          const container = document.createElement('div');
          container.className = 'anim';
          const options = {
            container,
            loop: type === 'loop',
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
          const anim = loadAnimation(`${base}/${index}.json`, options);
          container.style.zIndex = layer;
          anim.onEnterFrame = e => {
            this.dispatchEvent(new CustomEvent('anim', {
              detail: {
                index,
                currentTime: e.currentTime
              },
              bubbles: true
            }));
          };
          const resize = buildSafeResize(anim);
          let ratio;
          container.classList.add('loading');
          anim.addEventListener('DOMLoaded', () => {
            container.classList.remove('loading');
            resize();
          });
          if (type === 'scroll') {
            ratio = v => {
              if (v === null) {
                return;
              }
              const frames = anim.getDuration(true);
              const frame = Math.min(frames, Math.max(0.0, frames * v));
              anim.goToAndStop(frame, true);
            };
          } else {
            ratio = v => {
              const visible = v !== null;
              if (visible === anim.isPaused) {
                visible ? anim.play() : anim.pause();
              }
            };
          }
          return {
            node: container,
            ratio,
            resize
          };
        }
    }
    throw new TypeError(`unsupported part type: ${type}`);
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has('ratio')) {
      this._partsCache.forEach(part => {
        if (!part.cache) {
          part.ratio(this.ratio);
        }
      });
      if (changedProperties.size === 1) {
        return false;
      }
    }
    const anyOf = ['parts', 'mode', 'load'];
    if (!anyOf.some(x => changedProperties.has(x))) {
      return true;
    }
    let parts = this.parts ? this.parts.split(',').map(x => x.trim()) : [];
    if (this.mode === 'small') {
      parts = parts.map(x => x.startsWith('static-') ? x : null);
    }
    if (this.mode === 'mobile' && !this.desktop) {
      parts = parts.map(x => null);
      parts.push('mobile');
    } else {
      parts.push(null);
    }
    if (!this.load) {
      parts = parts.map(x => null);
    }
    if (parts.indexOf('cards') === -1) {
      parts.push('cards');
    }
    const largest = Math.max(parts.length, this._partsCache.length);
    for (let i = 0; i < largest; ++i) {
      const want = parts[i] || null;
      if (!this._partsCache[i]) {
        this._partsCache[i] = {
          part: null,
          cache: false,
          node: null,
          resize: noop,
          ratio: noop
        };
      }
      const c = this._partsCache[i];
      if (c.part === want) {
        if (c.cache) {
          c.cache = false;
          c.ratio(this.ratio);
        }
        continue;
      }
      if (c.part) {
        if (want === null) {
          c.cache = true;
          c.ratio(null);
          continue;
        }
        throw new TypeError(`can't change type of modvil-module: ${want}`);
      }
      const {
        node,
        ratio,
        resize
      } = this._loadPart(want, i);
      c.node = node;
      c.ratio = ratio || noop;
      c.part = want;
      c.resize = resize || noop;
      c.ratio(this.ratio);
    }
    return true;
  }
  resize() {
    this._partsCache.map(({
      resize
    }) => resize());
  }
  render() {
    const mainStyle = `background-color: ${this.color || 'transparent'}`;
    const dividerStyle = this.hasAttribute('no-divider') ? '' : `background-image: url(${assetPath}${this.id}/divider.svg)`;
    const parts = this._partsCache.map(({
      node,
      cache
    }) => cache ? null : node).filter(Boolean);
    return html`
<main style=${mainStyle}>
  ${parts}
</main>
<div class="divider" style=${dividerStyle}></div>
    `;
  }
}
customElements.define('modvil-module', ModvilModuleElement);
const sheet$8 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$8.replaceSync(":host{display:block;width:100%}#top{height:1050px;display:flex;align-items:center;background:linear-gradient(180deg, #00C1F2 0%, #B4E5E6 17.71%, #FFF8BD 41.67%);color:#fff;flex-flow:column;z-index:10;position:relative;max-width:1920px;margin:0 auto}@media(max-width: 1024px){#top{height:720px}}#top santa-weather{position:absolute;top:0;left:0;right:0;bottom:0}#top-divider{position:relative;height:72px;background:#eee url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/village/divider.svg) center repeat-x;background-size:auto 72px;z-index:1000000;box-shadow:0 0 0 2px rgba(0,0,0,.125);max-width:1920px;margin:0 auto}.village{overflow-x:hidden;position:absolute;top:0;left:0;right:0;bottom:0}.village>div{position:absolute;top:0;left:0;right:0;bottom:0;background:transparent center bottom no-repeat;background-size:2040px;overflow:hidden}.village .layer1{background-image:url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/village/1.svg)}.village .layer2{background-image:url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/village/2.svg)}.village .layer2 .elfski1{position:absolute;top:130px;left:calc(50% + 1040px);width:58px;height:67px;background-image:url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/village/elfski1.svg);background-repeat:no-repeat}.village .layer2 .elfski2{position:absolute;top:110px;left:calc(50% + 1050px);width:58px;height:67px;background-image:url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/village/elfski2.svg);background-repeat:no-repeat}.village .layer2 .elfski1,.village .layer2 .elfski2{animation:modvil-village__elfski 5000ms infinite linear forwards}.village .layer2 .elfski2{animation-delay:80ms}@keyframes modvil-village__elfski{0%{transform:translate3d(0, 0, 0) rotateZ(10deg)}30%{transform:translate3d(-500px, 20px, 0) rotateZ(0deg)}40%{transform:translate3d(-750px, 190px, 0) rotateZ(0deg)}50%{transform:translate3d(-1000px, 260px, 0) rotateZ(10deg)}100%{transform:translate3d(-2150px, 260px, 0) rotateZ(10deg)}}@media(max-width: 1024px){.village .layer2 .elfski1{top:280px}.village .layer2 .elfski2{top:260px}}.village .layer3{background-image:url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/village/3.svg)}.village .layer3 .elfbike1,.village .layer3 .elfbike2,.village .layer3 .elfbike3,.village .layer3 .elfbike4,.village .layer3 .elfbike5,.village .layer3 .elfbike6,.village .layer3 .elfchair,.village .layer3 .elfboard1,.village .layer3 .elfboard2,.village .layer3 .elf-glitch{position:absolute}.village .layer3 .elf-glitch{width:84px;height:133px;left:calc(50% - 477px);top:494px}.village .layer3 .elf-glitch *{position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(img/village/elf-glitch-front.svg);background-color:transparent;background-size:cover;transform:translate3d(0, 0, 0);background-blend-mode:transparent}.village .layer3 .elf-glitch *:nth-child(3){background-color:rgba(255,255,255,.2);background-blend-mode:overlay;opacity:0}.village .layer3 .elf-glitch.glitch *:nth-child(2){transform:translate3d(3px, 0, 0);animation:glitch-anim-1-horizontal 3s infinite linear alternate}.village .layer3 .elf-glitch.glitch *:nth-child(3){opacity:1;transform:translate3d(calc(-1 * 3px), 0, 0);animation:glitch-anim-2-horizontal 3s infinite linear alternate}.village .layer3 .elf-glitch.glitch *:nth-child(4){transform:translate3d(0, calc(-1 * 7px), 0) scale3d(-1, -1, 1);animation:glitch-anim-3-horizontal 3s infinite linear alternate}.village .layer3 .elf-glitch.glitch *:nth-child(5){animation:glitch-anim-flash .5s steps(1, end) infinite}@keyframes glitch-anim-1-horizontal{0%{clip-path:polygon(0 2%, 100% 2%, 100% 5%, 0 5%)}10%{clip-path:polygon(0 15%, 100% 15%, 100% 15%, 0 15%)}20%{clip-path:polygon(0 10%, 100% 10%, 100% 20%, 0 20%)}30%{clip-path:polygon(0 1%, 100% 1%, 100% 2%, 0 2%)}40%{clip-path:polygon(0 33%, 100% 33%, 100% 33%, 0 33%)}50%{clip-path:polygon(0 44%, 100% 44%, 100% 44%, 0 44%)}60%{clip-path:polygon(0 50%, 100% 50%, 100% 20%, 0 20%)}70%{clip-path:polygon(0 70%, 100% 70%, 100% 70%, 0 70%)}80%{clip-path:polygon(0 80%, 100% 80%, 100% 80%, 0 80%)}90%{clip-path:polygon(0 50%, 100% 50%, 100% 55%, 0 55%)}100%{clip-path:polygon(0 70%, 100% 70%, 100% 80%, 0 80%)}}@keyframes glitch-anim-2-horizontal{0%{clip-path:polygon(0 25%, 100% 25%, 100% 30%, 0 30%)}15%{clip-path:polygon(0 3%, 100% 3%, 100% 3%, 0 3%)}22%{clip-path:polygon(0 5%, 100% 5%, 100% 20%, 0 20%)}31%{clip-path:polygon(0 20%, 100% 20%, 100% 20%, 0 20%)}45%{clip-path:polygon(0 40%, 100% 40%, 100% 40%, 0 40%)}51%{clip-path:polygon(0 52%, 100% 52%, 100% 59%, 0 59%)}63%{clip-path:polygon(0 60%, 100% 60%, 100% 60%, 0 60%)}76%{clip-path:polygon(0 75%, 100% 75%, 100% 75%, 0 75%)}81%{clip-path:polygon(0 65%, 100% 65%, 100% 40%, 0 40%)}94%{clip-path:polygon(0 45%, 100% 45%, 100% 50%, 0 50%)}100%{clip-path:polygon(0 14%, 100% 14%, 100% 33%, 0 33%)}}@keyframes glitch-anim-3-horizontal{0%{clip-path:polygon(0 1%, 100% 1%, 100% 3%, 0 3%)}5%{clip-path:polygon(0 10%, 100% 10%, 100% 9%, 0 9%)}10%{clip-path:polygon(0 5%, 100% 5%, 100% 6%, 0 6%)}25%{clip-path:polygon(0 20%, 100% 20%, 100% 20%, 0 20%)}27%{clip-path:polygon(0 10%, 100% 10%, 100% 10%, 0 10%)}30%{clip-path:polygon(0 30%, 100% 30%, 100% 25%, 0 25%)}33%{clip-path:polygon(0 15%, 100% 15%, 100% 16%, 0 16%)}37%{clip-path:polygon(0 40%, 100% 40%, 100% 39%, 0 39%)}40%{clip-path:polygon(0 20%, 100% 20%, 100% 21%, 0 21%)}45%{clip-path:polygon(0 60%, 100% 60%, 100% 55%, 0 55%)}50%{clip-path:polygon(0 30%, 100% 30%, 100% 31%, 0 31%)}53%{clip-path:polygon(0 70%, 100% 70%, 100% 69%, 0 69%)}57%{clip-path:polygon(0 40%, 100% 40%, 100% 41%, 0 41%)}60%{clip-path:polygon(0 80%, 100% 80%, 100% 75%, 0 75%)}65%{clip-path:polygon(0 50%, 100% 50%, 100% 51%, 0 51%)}70%{clip-path:polygon(0 90%, 100% 90%, 100% 90%, 0 90%)}73%{clip-path:polygon(0 60%, 100% 60%, 100% 60%, 0 60%)}80%{clip-path:polygon(0 100%, 100% 100%, 100% 99%, 0 99%)}100%{clip-path:polygon(0 70%, 100% 70%, 100% 71%, 0 71%)}}.village .layer3 .elfbike1{width:80px;height:94px;background-image:url(img/village/elfbike1.svg);left:calc(50% + -165px);top:590px;animation:elfbike1 14s infinite linear forwards}@keyframes elfbike1{0%{transform:translate3d(-945px, -145px, 0) rotateZ(20deg)}10%{transform:translate3d(-945px, -145px, 0) rotateZ(20deg)}25%{transform:translate3d(-425px, 25px, 0) rotateZ(-10deg)}50%{transform:translate3d(335px, -15px, 0) rotateZ(10deg)}65%{transform:translate3d(745px, 75px, 0) rotateZ(30deg)}90%{transform:translate3d(1005px, 465px, 0) rotateZ(50deg)}100%{transform:translate3d(1005px, 465px, 0) rotateZ(50deg)}}.village .layer3 .elfbike2{width:77px;height:78px;background-image:url(img/village/elfbike2.svg);left:calc(50% + -85px);top:580px;animation:elfbike2 14s infinite linear forwards}@keyframes elfbike2{0%{transform:translate3d(-1015px, -45px, 0) rotateZ(15deg)}16%{transform:translate3d(-1015px, -45px, 0) rotateZ(15deg)}33%{transform:translate3d(-495px, 55px, 0) rotateZ(2deg)}49%{transform:translate3d(115px, -35px, 0) rotateZ(2deg)}62%{transform:translate3d(465px, -25px, 0) rotateZ(12deg)}85%{transform:translate3d(875px, 485px, 0) rotateZ(52deg)}100%{transform:translate3d(875px, 485px, 0) rotateZ(52deg)}}.village .layer3 .elfbike3{width:81px;height:93px;background-image:url(img/village/elfbike3.svg);left:calc(50% + 243px);top:580px;animation:elfbike3 14s infinite linear forwards}@keyframes elfbike3{0%{transform:translate3d(-1355px, -56px, 0) rotateZ(5deg)}14%{transform:translate3d(-1355px, -56px, 0) rotateZ(5deg)}32%{transform:translate3d(-695px, 50px, 0) rotateZ(-5deg)}50%{transform:translate3d(-205px, -3px, 0) rotateZ(3deg)}65%{transform:translate3d(275px, 47px, 0) rotateZ(13deg)}90%{transform:translate3d(685px, 477px, 0) rotateZ(33deg)}100%{transform:translate3d(685px, 477px, 0) rotateZ(33deg)}}.village .layer3 .elfbike4{width:104px;height:113px;background-image:url(img/village/elfbike4.svg);left:calc(50% + 15px);top:540px;animation:elfbike4 14s infinite linear forwards}@keyframes elfbike4{0%{transform:translate3d(-1135px, -75px, 0) rotateZ(15deg)}26%{transform:translate3d(-1135px, -75px, 0) rotateZ(15deg)}48%{transform:translate3d(-655px, 55px, 0) rotateZ(-5deg)}70%{transform:translate3d(-35px, -35px, 0) rotateZ(2deg)}84%{transform:translate3d(435px, 65px, 0) rotateZ(2deg)}99%{transform:translate3d(1015px, 515px, 0) rotateZ(42deg)}100%{transform:translate3d(1015px, 515px, 0) rotateZ(42deg)}}.village .layer3 .elfbike5{width:103px;height:120px;background-image:url(img/village/elfbike5.svg);left:calc(50% + 125px);top:560px;animation:elfbike5 14s infinite linear forwards}@keyframes elfbike5{0%{transform:translate3d(-1255px, -65px, 0) rotateZ(2deg)}20%{transform:translate3d(-1255px, -65px, 0) rotateZ(2deg)}40%{transform:translate3d(-615px, 15px, 0) rotateZ(2deg)}60%{transform:translate3d(-45px, -15px, 0) rotateZ(0deg)}75%{transform:translate3d(445px, 15px, 0) rotateZ(18deg)}95%{transform:translate3d(715px, 505px, 0) rotateZ(29deg)}100%{transform:translate3d(715px, 505px, 0) rotateZ(29deg)}}.village .layer3 .elfbike6{width:104px;height:119px;background-image:url(img/village/elfbike6.svg);left:calc(50% + -265px);top:550px;animation:elfbike6 14s infinite linear forwards}@keyframes elfbike6{0%{transform:translate3d(-865px, -115px, 0) rotateZ(19deg)}20%{transform:translate3d(-865px, -115px, 0) rotateZ(19deg)}45%{transform:translate3d(-245px, 65px, 0) rotateZ(-1deg)}65%{transform:translate3d(325px, -45px, 0) rotateZ(3deg)}80%{transform:translate3d(785px, 65px, 0) rotateZ(16deg)}97%{transform:translate3d(1215px, 515px, 0) rotateZ(36deg)}100%{transform:translate3d(1215px, 515px, 0) rotateZ(36deg)}}.village .layer3 .elfchair{width:97px;height:77px;background-image:url(img/village/elfchair.svg);left:calc(50% + 392px);top:620px;animation:elfchair 14s infinite linear forwards}.village .layer3 .elfchair::after{content:\"\";background-image:url(img/village/elfchair-wheel.svg);width:30px;height:30px;position:absolute;left:20px;top:40px;animation:rotate 500ms infinite linear}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes elfchair{0%{transform:translate3d(-1555px, -165px, 0) rotateZ(0deg)}1%{transform:translate3d(-1555px, -165px, 0) rotateZ(0deg)}15%{transform:translate3d(-965px, 35px, 0) rotate(-6deg)}40%{transform:translate3d(-25px, -45px, 0) rotate(-6deg)}47%{transform:translate3d(204px, 35px, 0) rotate(8deg)}65%{transform:translate3d(534px, 435px, 0) rotate(15deg)}100%{transform:translate3d(534px, 435px, 0) rotate(15deg)}}.village .layer3 .elfboard1{width:72px;height:108px;background-image:url(img/village/elfboard1.svg);left:calc(50% + 449px);top:636px;animation:elfboard1 14s infinite linear forwards}@keyframes elfboard1{0%{transform:translate3d(-1555px, -175px, 0) rotateZ(5deg)}6%{transform:translate3d(-1555px, -175px, 0) rotateZ(5deg)}25%{transform:translate3d(-935px, -15px, 0) rotateZ(-15deg)}47.5%{transform:translate3d(-215px, -115px, 0) rotateZ(15deg)}60%{transform:translate3d(150px, 0, 0) rotateZ(-5deg)}72%{transform:translate3d(305px, 415px, 0) rotateZ(5deg)}100%{transform:translate3d(305px, 415px, 0) rotateZ(5deg)}}.village .layer3 .elfboard2{width:65px;height:94px;background-image:url(img/village/elfboard2.svg);left:calc(50% + 545px);top:624px;animation:elfboard2 14s infinite linear forwards}@keyframes elfboard2{0%{transform:translate3d(-1650px, -150px, 0) rotateZ(5deg)}4%{transform:translate3d(-1650px, -150px, 0) rotateZ(5deg)}20%{transform:translate3d(-1060px, -10px, 0) rotateZ(-15deg)}40%{transform:translate3d(-500px, -50px, 0) rotateZ(15deg)}55%{transform:translate3d(0, 0, 0) rotateZ(-5deg)}70%{transform:translate3d(410px, 430px, 0) rotateZ(5deg)}100%{transform:translate3d(410px, 430px, 0) rotateZ(5deg)}}@media(max-width: 1024px){.village .layer3 .elfbike1{top:740px}.village .layer3 .elfbike2{top:730px}.village .layer3 .elfbike3{top:730px}.village .layer3 .elfbike4{top:690px}.village .layer3 .elfbike5{top:710px}.village .layer3 .elfbike6{top:700px}.village .layer3 .elfchair{top:770px}.village .layer3 .elfboard1{top:786px}.village .layer3 .elfboard2{top:744px}.village .layer3 .elf-glitch{top:644px}}.village .layer4{background-image:url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/village/4.svg)}.village .layer4 .retro{position:absolute;width:83px;height:96px;top:500px;left:calc(50% - 476px);border:0;background:transparent;padding:0;margin:0;cursor:pointer}.village .layer4 .waterspout{position:absolute;width:117px;height:132px;left:calc(50% - 55px);top:607px;overflow:hidden}.village .layer4 .waterspout-bottom{width:9px;height:79px;position:absolute;left:53px;top:54px;background-image:url(img/village/waterspout-bottom.svg);background-repeat:no-repeat;animation:waterspout-bottom 5000ms infinite ease-in-out}.village .layer4 .waterspout-top{top:0;left:0;width:116px;height:82px;position:absolute;background-image:url(img/village/waterspout-top.svg);background-repeat:no-repeat;animation:waterspout-top 5000ms infinite ease-in-out}@keyframes waterspout-bottom{0%{transform:translate3d(0, 130px, 0) scale(0.6)}30%{transform:translate3d(0, 0, 0) scale(1)}80%{transform:translate3d(0, 0, 0) scale(1)}100%{transform:translate3d(0, 130px, 0) scale(0.6)}}@keyframes waterspout-top{0%{transform:translate3d(0, 145px, 0) scale(0, 0) rotateZ(5deg)}33%{transform:translate3d(0, 0, 0) scale(1, 1) rotateZ(-5deg)}40%{transform:translate3d(0, 5px, 0) scale(1, 1) rotateZ(5deg)}50%{transform:translate3d(0, 0, 0) scale(1, 1) rotateZ(-5deg)}60%{transform:translate3d(0, 5px, 0) scale(1, 1) rotateZ(5deg)}70%{transform:translate3d(0, 0, 0) scale(1, 1) rotateZ(-5deg)}80%{transform:translate3d(0, 5px, 0) scale(1, 1) rotateZ(5deg)}100%{transform:translate3d(0, 145px, 0) scale(0, 0) rotateZ(5deg)}}.village .layer4 .snowman-build{position:absolute;width:122px;height:188px;left:calc(50% + 20px);top:807px}.village .layer4 .snowman-build-bottom{top:0;left:0;width:100%;height:100%;position:absolute;background-image:url(img/village/snowman-build-bottom.svg);background-repeat:no-repeat;background-size:contain}.village .layer4 .snowman-build-top{top:0;left:0;width:100%;height:100%;position:absolute;background-image:url(img/village/snowman-build-top.svg);background-repeat:no-repeat;background-size:contain;transform-origin:center center;animation:heavy-snow 7000ms infinite ease-in-out}@keyframes heavy-snow{0%{transform:translate3d(0, 3px, 0) rotateZ(0deg)}50%{transform:translate3d(-20px, 11px, 0) rotateZ(-30deg)}100%{transform:translate3d(0, 3px, 0) rotateZ(0deg)}}.village .layer4 .peekaboo{position:absolute;top:619px;left:calc(50% - 506px);width:108px;height:161px}.village .layer4 .peekaboo-elf{position:absolute;width:73px;height:95px;top:11px;background-image:url(img/village/tree-elf.svg);background-repeat:no-repeat;background-size:contain;animation:peekaboo 8000ms infinite ease-in-out}.village .layer4 .peekaboo-tree{position:absolute;background-image:url(img/village/tree.svg);background-repeat:no-repeat;background-size:contain;width:98px;height:161px;left:12px}@keyframes peekaboo{0%{transform:translate3d(20px, 28px, 0) rotateZ(39deg)}10%{transform:translate3d(0, 0, 0) rotateZ(0deg)}50%{transform:translate3d(20px, 28px, 0) rotateZ(39deg)}60%{transform:translate3d(53px, 0, 0) rotateZ(40deg)}100%{transform:translate3d(20px, 28px, 0) rotateZ(39deg)}}@media(max-width: 1024px){.village .layer4 .waterspout,.village .layer4 .snowman-build,.village .layer4 .peekaboo,.village .layer4 .retro{transform:translateY(150px)}}@media(max-width: 1024px){.village{transform:scale(0.6);height:1200px;width:166.6666666667vw;transform-origin:top left}}header{text-align:center;display:flex;flex-flow:column;align-items:center;padding-top:60px;box-sizing:border-box;position:relative;z-index:0;width:100%}.ornament{background:url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/ornament.svg) 50% 20% no-repeat;background-size:contain;width:450px;height:250px;margin-top:-60px;position:absolute;z-index:-1}");
class ModvilVillageElement extends LitElement {
  static get styles() {
    return [sheet$8];
  }
  static get properties() {
    return {
      active: {
        type: Boolean
      }
    };
  }
  firstUpdated() {
    this._glitch();
  }
  _glitch() {
    const elfGlitch = this.renderRoot.querySelector('.elf-glitch');
    let timeout = 10000;
    if (elfGlitch.classList.contains('glitch')) {
      elfGlitch.classList.remove('glitch');
    } else {
      timeout = 5000;
      elfGlitch.classList.add('glitch');
    }
    window.setTimeout(() => this._glitch(), timeout);
  }
  render() {
    return html`
<div id="top">
  <santa-weather .active=${this.active}></santa-weather>
  <div class="village">
    <div class="layer1">
    </div>
    <div class="layer2">
      <div class="elfski1" @animationiteration=${() => this._play('village_top_skier')}></div>
      <div class="elfski2"></div>
    </div>
    <div class="layer3">
      <div class="elf-glitch">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="elfbike4"></div>
      <div class="elfbike6"></div>
      <div class="elfbike2"></div>
      <div class="elfbike3"></div>
      <div class="elfbike5"></div>
      <div class="elfbike1"></div>
      <div class="elfchair"></div>
      <div class="elfboard1" @animationiteration=${() => this._play('village_top_bikeride')}></div>
      <div class="elfboard2"></div>
    </div>
    <div class="layer4">
      <button aria-label="View Santa in Retro scene" class="retro" @click=${this._onClickRetro}></button>
      <div class="peekaboo" @animationiteration=${() => this._play('village_top_surprise')}>
        <div class="peekaboo-elf"></div>
        <div class="peekaboo-tree"></div>
      </div>
      <div class="waterspout">
        <div class="waterspout-bottom" @animationiteration=${() => this._play('village_top_fountain')}></div>
        <div class="waterspout-top"></div>
      </div>
      <div class="snowman-build">
        <div class="snowman-build-bottom"></div>
        <div class="snowman-build-top"></div>
      </div>
    </div>
  </div>
  <header>
    <div class="ornament"></div>
    <slot></slot>
  </header>
</div>
<div id="top-divider"></div>
    `;
  }
  _play(name) {
    if (this.active) {
      play(name);
    }
  }
  _onClickRetro() {
    go('retro');
  }
}
customElements.define('modvil-village', ModvilVillageElement);
const sheet$7 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$7.replaceSync(":host{display:flex;position:relative;padding-bottom:72px}.map{width:100%;height:100%}.map santa-santa{display:inline-block;transform:translate(-50%, -50%)}.top{position:absolute;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:center}@media(max-width: 600px){.top{display:none}}.top h1{font-family:\"Lobster\";color:#fff;margin-top:.5em;text-shadow:0 2px 0 rgba(0,0,0,.125);opacity:.75}#top-divider{position:relative;height:72px;background:#eee url(/ivanguys-web/nochepolar/st/v2026/scenes/modvil/img/divider-tracker.svg) center repeat-x;background-size:auto 72px;z-index:1000000;box-shadow:0 0 0 2px rgba(0,0,0,.125);max-width:1920px;margin:0 auto}.buttons{position:absolute;right:16px;top:12px;display:flex;flex-direction:column;align-items:flex-end;gap:12px}.buttons santa-button{display:inline-block;transition:opacity .25s ease-in-out}.buttons santa-button.gone{pointer-events:none;opacity:0}.buttons santa-button svg{width:38px;height:38px;filter:drop-shadow(1px 2px 0 rgba(0, 0, 0, 0.25))}.outer{position:relative;width:100%;height:100%}.outer .overflow{position:absolute;height:100%;left:0;right:0;pointer-events:none;bottom:0;overflow:hidden}.outer .info{pointer-events:auto;position:absolute;bottom:20px;left:0;right:0;display:flex;justify-content:space-around;max-width:1024px;margin:0 auto;z-index:1000000}.outer .info>*{margin:0 4px 8px;min-width:180px;min-height:140px;height:140px;flex-grow:1}.outer .info>*:not(modvil-tracker-photos){position:relative;z-index:-1}@media(max-width: 600px){.outer .info{flex-flow:row wrap;justify-content:stretch;max-width:512px}.outer .info modvil-tracker-photos{order:-100}.outer .info modvil-tracker-feed{order:-50}.outer .info>*{min-width:180px}}@media(min-width: 601px){.outer .info>*{max-width:240px}.outer .info modvil-tracker-feed{height:180px;margin-top:-40px}.outer .info modvil-tracker-stats{height:160px;margin-top:-20px}}.outer .info .explore{min-width:0;margin-right:0;flex-grow:0}@media(max-width: 767px){.outer .info .explore{display:none}}.explore{display:flex;justify-content:center;align-items:center;flex-flow:column}.explore modvil-arrow{--arrow-dim: 42px;font-size:16px;text-shadow:0 1px 0 rgba(0,0,0,.25);margin-right:6px}");
const sheet$6 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$6.replaceSync(":host([hidden]){display:none !important}#outer{position:relative;display:flex;align-items:center;justify-content:center;width:68px;height:84px}@media(min-width: 768px){#outer{width:102px;height:126px}}#outer button{cursor:pointer;border:none;padding:0;margin:0;position:absolute;top:0;left:0;right:0;bottom:0;width:100%;font-size:0px;background:transparent;color:transparent;z-index:100}.presents{width:95px;min-width:95px;height:83px;background:transparent center/contain no-repeat;filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))}.presents.mode0{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/chimney0.gif)}.presents.mode1{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/chimney1.gif)}.sleigh{filter:drop-shadow(2px 4px 1px rgba(0, 0, 0, 0.25));width:100%;height:100%;position:absolute}@media(min-width: 768px){.sleigh{filter:drop-shadow(3px 6px 1px rgba(0, 0, 0, 0.25))}}.sleigh div{width:100%;height:100%;position:absolute;top:0;left:0;background:transparent center no-repeat;background-size:85%;will-change:transform;animation:tracker-sleigh-bounce 6s infinite ease-in-out}.sleigh div.front,.sleigh div.back{animation-name:tracker-santa-bounce}.sleigh div.santa:after{content:\"\";background:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/effects.svg) 50% 0 no-repeat;position:absolute;left:0;width:100%;top:66%;height:52%;z-index:1}.sleigh[data-dir=n] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-n-front.svg)}.sleigh[data-dir=n] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-n-santa.svg)}.sleigh[data-dir=n] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-n-back.svg)}.sleigh[data-dir=ne] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-ne-front.svg)}.sleigh[data-dir=ne] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-ne-santa.svg)}.sleigh[data-dir=ne] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-ne-back.svg)}.sleigh[data-dir=e] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-e-front.svg)}.sleigh[data-dir=e] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-e-santa.svg)}.sleigh[data-dir=e] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-e-back.svg)}.sleigh[data-dir=se] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-se-front.svg)}.sleigh[data-dir=se] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-se-santa.svg)}.sleigh[data-dir=se] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-se-back.svg)}.sleigh[data-dir=s] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-s-front.svg)}.sleigh[data-dir=s] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-s-santa.svg)}.sleigh[data-dir=s] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-s-back.svg)}.sleigh[data-dir=sw] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-sw-front.svg)}.sleigh[data-dir=sw] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-sw-santa.svg)}.sleigh[data-dir=sw] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-sw-back.svg)}.sleigh[data-dir=w] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-w-front.svg)}.sleigh[data-dir=w] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-w-santa.svg)}.sleigh[data-dir=w] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-w-back.svg)}.sleigh[data-dir=nw] .front{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-nw-front.svg)}.sleigh[data-dir=nw] .santa{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-nw-santa.svg)}.sleigh[data-dir=nw] .back{background-image:url(/ivanguys-web/nochepolar/st/v2026/img/sleigh/sleigh-nw-back.svg)}@keyframes tracker-sleigh-bounce{0%{transform:translateY(0)}10%{transform:translateY(-3px)}20%{transform:translateY(3px)}30%{transform:translateY(-2px)}40%{transform:translateY(2px)}55%{transform:translateY(-6px)}65%{transform:translateY(7px)}80%{transform:translateY(-3px)}90%{transform:translateY(3px)}100%{transform:translateY(0)}}@keyframes tracker-santa-bounce{0%{transform:translateY(0)}10%{transform:translateY(-4px)}20%{transform:translateY(4px)}30%{transform:translateY(-3px)}40%{transform:translateY(3px)}55%{transform:translateY(-7px)}65%{transform:translateY(8px)}80%{transform:translateY(-4px)}90%{transform:translateY(4px)}100%{transform:translateY(0)}}");
const santaDir = 'n ne e se s sw w nw'.split(' ');
const assetRoot = "/ivanguys-web/nochepolar/st/v2026/img/sleigh";
function dirForHeading(heading) {
  if (isNaN(heading) || typeof heading !== 'number') {
    return 's';
  }
  const offset = 360 / (santaDir.length * 2);
  const normalized = ((heading + offset) % 360 + 360) % 360;
  const index = Math.floor(normalized / 360 * santaDir.length);
  return santaDir[index];
}
const urls = ['chimney0.gif', 'chimney1.gif', 'effects.svg'];
santaDir.forEach(dir => {
  urls.push(`sleigh-${dir}-back.svg`);
  urls.push(`sleigh-${dir}-front.svg`);
  urls.push(`sleigh-${dir}-santa.svg`);
});
preload.assets(...urls.map(raw => `${assetRoot}/${raw}`));
class SantaSantaElement extends LitElement {
  static get styles() {
    return [sheet$6];
  }
  static get properties() {
    return {
      heading: {
        type: Number
      },
      stop: {
        type: Boolean
      }
    };
  }
  render() {
    const dir = dirForHeading(this.heading);
    const mode = Math.floor(Math.abs(this.heading) % 2);
    return html`
<div id="outer">
  <button>${"P\xE8re No\xEBl"}</button>
  <div class="presents mode${mode}" ?hidden=${!this.stop}></div>
  <div class="sleigh" data-dir=${dir} ?hidden=${this.stop}>
    <div class="back"></div>
    <div class="santa"></div>
    <div class="front"></div>
  </div>
</div>
    `;
  }
}
customElements.define('santa-santa', SantaSantaElement);
const sheet$5 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$5.replaceSync(".outer{width:100%;height:100%;background:rgba(0,0,0,.25);border-radius:8px;overflow:hidden;position:relative;box-shadow:2px 4px 0 rgba(0,0,0,.125)}main{-webkit-mask-image:-webkit-radial-gradient(white, black);border-radius:8px;overflow:hidden;position:absolute;width:100%;height:100%;top:0;left:0}.title{padding:2px 12px 6px;position:relative;z-index:2;background:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));display:flex;align-items:center}.title big{font:inherit;color:#ff0030;font-size:25px;margin-right:2px}.title h1{position:relative;vertical-align:middle;font:inherit;color:#ff0030;text-transform:uppercase;font-weight:bold;font-size:11px;white-space:nowrap}.asset{-webkit-mask-image:-webkit-radial-gradient(white, black);border-radius:inherit;position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:1;object-fit:cover;transition:transform .5s;transform:translateY(0)}.asset.gone{transform:translateY(-100%)}.asset.appear{transform:translateY(100%)}");
var feed = {
  "limit": {
    "abbyroad.png": "london",
    "alexandria.mp4": "alexandria",
    "nurseltan.mp4": "astana",
    "starvillage.mp4": "hakodate",
    "travels.mp4": "paris",
    "windmill.mp4": "amsterdam"
  },
  "cards": ["babybird.png", "badsweater.png", "bjornpenguin.png", "chiquitasanta.png", "closecall.png", "crossing.png", "dunks.png", "elfpower.png", "fireplacehangout.png", "grocery.png", "hanging.png", "kickflip.png", "route66.png", "santaarms.png", "santacone.png", "santasled.png", "snowangels.png", "snowball.png", "snowcones.png", "split.png", "cart.png", "celebritysanta.mp4", "gondola.png", "hanginthere.png", "kiss.png", "pyramid.png", "santaticket.png", "stuck.png", "twins.png", "abbyroad.png", "alexandria.mp4", "award.mp4", "awwman.png", "beach.mp4", "bracket.mp4", "calm.png", "catchsnow.png", "cookies.png", "dance.png", "dog.png", "faceswap.mp4", "feetup.png", "fireplace.mp4", "gear.png", "hearts.png", "hotcoco.png", "icecarving.png", "icicle.png", "igloo.png", "inflightmeal.png", "infrontofmoon.png", "inthebag.png", "jackson.png", "ladybug.png", "lights.mp4", "locallysourced.mp4", "master.png", "metafriend.png", "milkandcookies.png", "mints.png", "mintybreath.mp4", "mrsclaus.mp4", "mrsclauslab.mp4", "museum.mp4", "mustache.png", "nightsky.png", "nurseltan.mp4", "nutcrackers.png", "packingcenter.png", "palmtree.png", "phonepole.png", "pinch.png", "pineapple.png", "quotecards.mp4", "ramen.png", "reindeercuddle.png", "rocker.mp4", "sadtree.png", "santacrack.png", "santascoat.png", "santasvillage.mp4", "scuba.png", "shadow.png", "snowdog.png", "snowmanhead.png", "snowpeople.mp4", "starvillage.mp4", "stocking.png", "syrup.png", "tongueonpole.png", "toymaking.mp4", "travels.mp4", "truelove.png", "underwater.png", "uptree.png", "waymo.png", "whiteout.png", "windmill.mp4"]
};
class ItemChooser {
  constructor(options) {
    this._options = options.slice();
    this._options.sort(() => Math.random() - 0.5);
    this._count = 0;
  }
  get curr() {
    return this._options[this._count];
  }
  next() {
    ++this._count;
    if (this._count >= this._options.length) {
      const last = this._options[this._options.length - 1];
      this._options.sort(() => Math.random() - 0.5);
      if (this._options[0] === last) {
        this._count = 1;
      } else {
        this._count = 0;
      }
    }
    return this._options[this._count];
  }
}
class ModvilTrackerFeedElement extends LitElement {
  static get styles() {
    return [sheet$5];
  }
  static get properties() {
    return {
      _mainNode: {
        type: Object
      },
      stops: {
        type: Array
      }
    };
  }
  constructor() {
    super();
    this._chooser = new ItemChooser(feed.cards);
    this._done = Promise.resolve();
    this._mainNode = document.createElement('main');
    this._visitedStops = new Set();
    this._specialForStop = [];
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has('stops')) {
      this._visitedStops = new Set(this.stops || []);
      const lastStop = this.stops.slice(-1)[0] || null;
      this._specialForStop = [];
      for (const cand in feed.limit) {
        const stop = feed.limit[cand];
        if (stop === lastStop) {
          this._specialForStop.push(cand);
        }
      }
      this._specialForStop.sort(() => Math.random() - 0.5);
    }
    return true;
  }
  async runner() {
    let failure = 0;
    let last = null;
    for (;;) {
      if (!this.isConnected) {
        return;
      }
      let choice = this._specialForStop.pop() || this._chooser.next();
      if (choice === last) {
        continue;
      }
      last = choice;
      const requiredStop = feed.limit[choice];
      if (requiredStop && !this._visitedStops.has(requiredStop)) {
        continue;
      }
      const url = `https://firebasestorage.googleapis.com/v0/b/santa-api.appspot.com/o/feed%2F${encodeURIComponent(choice)}?alt=media`;
      const {
        promise
      } = prepareAsset(url);
      const asset = await promise.catch(() => null);
      if (asset === null) {
        ++failure;
        await timeout(800 * Math.pow(2, failure / 2));
        continue;
      }
      failure = 0;
      if (asset instanceof HTMLMediaElement) {
        asset.loop = false;
      }
      asset.classList.add('asset');
      await new Promise(r => window.requestAnimationFrame(r));
      await this._done;
      Array.from(this._mainNode.children).forEach(node => {
        node.classList.add('gone');
        node.addEventListener('transitionend', () => node.remove());
      });
      asset.classList.add('appear');
      this._mainNode.append(asset);
      asset.offsetLeft;
      asset.classList.remove('appear');
      if (asset instanceof HTMLMediaElement) {
        const duration = parseInt(asset.duration) * 1000 || 4000;
        this._done = Promise.race([timeout(duration * 2), new Promise(r => asset.addEventListener('ended', r))]);
      } else {
        const duration = 6000 * Math.random() + 6000;
        this._done = timeout(duration);
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    Promise.resolve().then(async () => {
      for (;;) {
        try {
          await this.runner();
        } catch (e) {
          console.warn('feed runner failed', e);
          continue;
        }
        break;
      }
    });
  }
  render() {
    return html`
<div class="outer">
  <div class="title">
  <big>&bull;</big>
    <h1>${"Flux en direct"}</h1>
  </div>
  ${this._mainNode}
</div>
    `;
  }
}
customElements.define('modvil-tracker-feed', ModvilTrackerFeedElement);
const sheet$4 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$4.replaceSync(".outer{display:flex;flex-flow:column;justify-content:center;background:#00cc81;font-size:13px;line-height:15px;padding:2px 12px 6px;border-radius:8px;box-sizing:border-box;width:100%;height:100%;box-shadow:2px 4px 0 rgba(0,0,0,.125)}.outer .grow{flex-grow:1}h1{font:inherit;color:#fff;margin:0;text-transform:uppercase;text-shadow:0 0 0 rgba(0,0,0,.125);font-weight:bold;margin:6px 0 2px;font-size:11px;white-space:nowrap}h2{font:inherit;color:#eefda5;margin:0;font-weight:500;font-variant-numeric:tabular-nums}.icon{display:flex;align-items:center}.icon svg{margin-right:2px}hr{height:1px;background:rgba(0,0,0,.1);margin:4px -4px 4px;border:0}.sides{display:flex;justify-content:space-between;text-align:center;font-size:11px;line-height:13px}.sides h1{font-weight:500;margin:3px 0 1px;font-size:9px}.sides h2{font-weight:400}.sides>div:last-child{text-align:right}.sides>div:first-child{text-align:left}");
function padDigits(x) {
  x = Math.round(x);
  return x < 10 ? `0${x}` : '' + x;
}
function formatDuration(ms) {
  if (!(ms >= 0)) {
    return '?';
  }
  let s = ms / 1000;
  const seconds = Math.floor(s) % 60;
  s /= 60;
  const mins = Math.floor(s) % 60;
  s /= 60;
  const hours = Math.floor(s) % 24;
  const days = Math.floor(s / 24);
  if (days > 365) {
    return `?`;
  } else if (days > 0) {
    return `${days}d`;
  }
  const parts = [padDigits(seconds)];
  if (hours) {
    parts.unshift(padDigits(hours), padDigits(mins));
  } else {
    parts.unshift(mins);
  }
  return parts.join(':');
}
function formatArrivalTime(ms) {
  const hours = ms / (60 * 60 * 1000);
  if (Math.round(hours) <= 1) {
    return "Le p\xE8re No\xEBl arrive bient\xF4t";
  }
  let floor = Math.floor(hours);
  const frac = hours % 1;
  let suffix = '';
  if (frac > 0.75) {
    ++floor;
  } else if (frac > 0.25) {
    suffix = '½';
  }
  const value = floor + suffix;
  const raw = "Le p\xE8re No\xEBl arrive dans environ {{hours}}\xA0heures";
  return raw.replace('{{hours}}', value);
}
function formatNumber(v, suffix = '') {
  if (!(v >= 0)) {
    return '?';
  }
  return new Number(v).toLocaleString() + suffix;
}
class ModvilTrackerStatsElement$1 extends LitElement {
  static get styles() {
    return [sheet$4];
  }
  static get properties() {
    return {
      details: {
        type: Object
      },
      arrivalTime: {
        type: Number
      }
    };
  }
  render() {
    const d = this.details || {
      raw: {}
    };
    const arrivalTime = this.arrivalTime || 0;
    const showArrivalHours = arrivalTime > 10 * 60 * 1000;
    const stopIcon = d.stop ? html`
<svg width="10" height="13" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.1 3.60004C7.1 1.80004 5.6 0.300049 3.8 0.300049C2 0.300049 0.5 1.80004 0.5 3.60004C0.5 4.50004 0.8 5.20005 1.4 5.80005L3.9 8.90005L6.4 5.80005C6.7 5.30005 7.1 4.50004 7.1 3.60004ZM3.7 4.80005C3.1 4.80005 2.5 4.30004 2.5 3.60004C2.5 3.00004 3 2.40005 3.7 2.40005C4.3 2.40005 4.9 2.90004 4.9 3.60004C4.9 4.30004 4.3 4.80005 3.7 4.80005Z" fill="#FFFEAB"/>
</svg>
        ` : html`
<svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.599609 8.59996H3.19961C4.19961 8.59996 4.99961 7.39995 4.99961 5.99995V5.29996C4.99961 3.89996 5.79961 2.69995 6.79961 2.69995H9.09961" stroke="#FFFEAB" stroke-width="2.2353" stroke-miterlimit="10"/>
  <path d="M8.39941 5.29996L12.8994 2.69995L8.39941 0.199951V5.29996Z" fill="#FFFEAB"/>
</svg>
        `;
    return html`
<div class="outer">
  <div class="grow">
    <h1>${showArrivalHours ? "Arriv\xE9e" : "Distance parcourue"}</h1>
    <h2>${showArrivalHours ? formatArrivalTime(arrivalTime) : formatNumber(Math.round(d.distance / 1000), 'km')}</h2>
    <h1>${"Cadeaux distribu\xE9s"}</h1>
    <h2>${formatNumber(d.presents)}</h2>
  </div>
  <hr />
  <div class="sides grow">
    <div>
      <h1>${d.stop ? "Arr\xEAt actuel" : "Prochain arr\xEAt"}</h1>
      <div class="icon">
        ${stopIcon}
        <h2>${d.raw.city}, ${d.raw.region}</h2>
      </div>
    </div>
    <div>
      <h1>${d.stop ? "D\xC9PART DANS" : "ARRIVE DANS"}</h1>
      <h2>${formatDuration(d.next)}</h2>
    </div>
  </div>
</div>
    `;
  }
}
customElements.define('modvil-tracker-stats', ModvilTrackerStatsElement$1);
const sheet$3 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$3.replaceSync(".outer{width:100%;height:100%;position:static}.outer .grow{flex-grow:1}button.hint{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;font-size:0;color:transparent;margin:0;padding:0;border:2px solid transparent;box-sizing:border-box;z-index:1000000;cursor:pointer;background:transparent}button.hint:focus{outline:0;border-color:rgba(0,0,0,.33)}.photos{filter:drop-shadow(2px 4px 0 rgba(0, 0, 0, 0.125));height:100%;width:100%;position:relative;z-index:100}.view-closed{position:relative;top:calc(-100%);left:0;right:0;height:100%;border:4px solid transparent;box-sizing:border-box;transition:opacity .25s ease-in-out;z-index:200}.view-closed::after{content:\"\";position:absolute;bottom:0;left:0;width:116px;height:66px;background:url(/ivanguys-web/nochepolar/st/v2026/img/tracker/localguides.svg) bottom left/contain no-repeat;transition:transform .25s ease-in-out,opacity .25s ease-in-out;opacity:1}.photos:empty+.view-closed::after{opacity:0}.photos.open+.view-closed{top:0;opacity:0;pointer-events:none}.photos.open+.view-closed .button-open{display:none}.view-open{position:absolute;left:0;right:0;bottom:-20px;height:calc(138% + 54px);transition:opacity .25s ease-in-out;z-index:10}.view-open::before{content:\"\";position:absolute;left:-50vw;right:-50vw;background:#00cc81;top:0;height:100%}.view-open .button-close{height:54px}.view-open .top{height:54px;padding:0 .8%;white-space:nowrap;text-overflow:ellipsis;overflow-y:hidden;display:flex;justify-content:space-between;align-items:center;position:relative}.view-open .top svg{fill:#eefda5;margin:0 6px}.photos:not(.open)~.view-open{pointer-events:none;opacity:0}.photos:not(.open)~.view-open .button-close{display:none}.view-open .title{display:flex;justify-content:center;align-items:center}.view-open .title h1{font-size:24px;line-height:24px;margin:0;color:#eefda5;font-weight:500}.view-closed .title{position:absolute;top:0;left:0;right:0;padding:4px 12px 0;transition:transform .25s ease-in-out,opacity .25s ease-in-out}.view-closed .title.gone{transform:translateY(10%);opacity:0}.view-closed .title h1{font-family:\"Lobster\";font-size:32px;font-weight:300;line-height:.75em;margin:6px -6px 0;color:#fff;transform:rotate(-3.5deg);max-width:100%;text-shadow:0 1px 0 rgba(0,0,0,.125);word-wrap:break-word}@media(max-width: 767px){.view-closed .title h1{font-size:24px}}.view-closed .title h2{font-size:11px;line-height:13px;color:#eefda5;font-weight:500}modvil-tracker-photo{pointer-events:none;width:100%;height:100%;position:absolute;transform-origin:center;transition:transform .25s ease-in-out;z-index:-1000}modvil-tracker-photo:nth-child(1){z-index:-1}modvil-tracker-photo:nth-child(2){z-index:-2}modvil-tracker-photo:nth-child(3){z-index:-3}modvil-tracker-photo:nth-child(4){z-index:-4}modvil-tracker-photo:nth-child(5){z-index:-5}modvil-tracker-photo:nth-child(6){z-index:-6}modvil-tracker-photo:nth-child(7){z-index:-7}modvil-tracker-photo:nth-child(8){z-index:-8}modvil-tracker-photo:nth-child(9){z-index:-9}modvil-tracker-photo:nth-child(10){z-index:-10}modvil-tracker-photo[destroy]{z-index:-1000}.photos.open{position:absolute;left:-12%;bottom:calc(-2% - 20px);height:140%}.photos.open modvil-tracker-photo{position:absolute;width:24%;height:96%}.photos.open modvil-tracker-photo.leave{--gone-direction: -1}.photos.open modvil-tracker-photo[data-position=\"0\"]{left:12.8%}.photos.open modvil-tracker-photo[data-position=\"1\"]{left:37.6%}.photos.open modvil-tracker-photo[data-position=\"2\"]{left:62.4%}.photos.open modvil-tracker-photo[data-position=\"3\"]{left:87.2%}@media(max-width: 600px){.photos.open{left:-24%;bottom:calc(-34% - 20px)}.photos.open modvil-tracker-photo{width:48%;height:48%}.photos.open modvil-tracker-photo[data-position=\"0\"]{left:25%;bottom:25%}.photos.open modvil-tracker-photo[data-position=\"1\"]{left:75%;bottom:25%}.photos.open modvil-tracker-photo[data-position=\"2\"]{left:25%;bottom:75%}.photos.open modvil-tracker-photo[data-position=\"3\"]{left:75%;bottom:75%}}.photos:not(.open) modvil-tracker-photo{transform:scale(0)}.photos:not(.open) modvil-tracker-photo:nth-child(1){--photo-darken: 0.25;transform:translateY(0)}.photos:not(.open) modvil-tracker-photo:nth-child(2){transform:translateY(-13.8px) scale(0.95)}.outer:hover .photos:not(.open) modvil-tracker-photo:nth-child(2){transform:translateY(-29.8px) scale(0.95) rotate(2deg) translateX(4px)}.photos:not(.open) modvil-tracker-photo:nth-child(3){transform:translateY(-29.6px) scale(0.9)}.outer:hover .photos:not(.open) modvil-tracker-photo:nth-child(3){transform:translateY(-61.6px) scale(0.9) rotate(4deg) translateX(8px)}.photos:not(.open) modvil-tracker-photo:nth-child(4){transform:translateY(-45.4px) scale(0.85)}.outer:hover .photos:not(.open) modvil-tracker-photo:nth-child(4){transform:translateY(-93.4px) scale(0.85) rotate(6deg) translateX(12px)}.photos:not(.open) modvil-tracker-photo:nth-child(5){transform:translateY(-61.2px) scale(0.8)}.outer:hover .photos:not(.open) modvil-tracker-photo:nth-child(5){transform:translateY(-125.2px) scale(0.8) rotate(8deg) translateX(16px)}.photos:not(.open) modvil-tracker-photo:nth-child(6){transform:translateY(-77px) scale(0.75)}.outer:hover .photos:not(.open) modvil-tracker-photo:nth-child(6){transform:translateY(-157px) scale(0.75) rotate(10deg) translateX(20px)}");
const sheet$2 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$2.replaceSync(":host{display:inline-block}.inner{width:100%;height:100%;box-sizing:border-box;border:4px solid #fff;position:relative;transition:transform .4s ease-in-out,opacity .2s ease-in-out;overflow:hidden;transform:translateY(0);opacity:1}.inner::after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background:#000;opacity:var(--photo-darken, 0);transition:opacity .4s;pointer-events:none}:host([appear]) .inner{transform:translateY(12.5%);opacity:0}:host([destroy]) .inner{transform:translateY(0) scale(0)}.attribution{position:absolute;bottom:0;left:0;right:0;color:#fff;font-size:11px;line-height:13px;padding:30px 0 0;transition:opacity .5s;background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));text-shadow:0 1px 0 rgba(0,0,0,.25);display:flex;flex-flow:row wrap;align-items:flex-end;justify-content:space-between}.attribution a{color:inherit;text-decoration:none;padding:0 10px 8.5px;flex-grow:100}.attribution a[href]:hover{text-decoration:underline}.attribution a::after{content:\"\";position:absolute;height:4em;transform:translateY(-50%);left:0;right:0;opacity:.25;z-index:100}:host(:not([large])) .attribution{opacity:0;transition:none}.attribution.brand::after{content:\"\";background:url(/ivanguys-web/nochepolar/st/v2026/img/tracker/localguides.svg) bottom right/contain no-repeat;min-width:100px;height:40px;margin-top:-12px;margin-bottom:-4px;filter:drop-shadow(0 1px 0 rgba(0, 0, 0, 0.25));position:relative;right:0;justify-self:flex-end;flex-grow:1}:host([large]) .inner{pointer-events:auto !important}::slotted(img){position:relative;object-fit:cover;width:100%;height:100%}");
preload.images("/ivanguys-web/nochepolar/st/v2026/img/tracker/localguides.svg");
class ModvilTrackerPhotoElement extends LitElement {
  static get styles() {
    return [sheet$2];
  }
  static get properties() {
    return {
      attributionHtml: {
        type: String
      },
      _href: {
        type: String
      },
      _author: {
        type: String
      },
      brand: {
        type: Boolean
      }
    };
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has('attributionHtml')) {
      const div = document.createElement('div');
      div.innerHTML = this.attributionHtml;
      const link = div.querySelector('a[href]');
      this._href = link ? link.href.toString() : undefined;
      this._author = div.textContent;
    }
    return true;
  }
  render() {
    return html`
<div class="inner">
  <slot></slot>
  <div class="attribution ${this.brand ? 'brand' : ''}">
    <a target="_blank" href=${ifDefined(this._href)}>${this._author}</a>
  </div>
</div>
    `;
  }
}
customElements.define('modvil-tracker-photo', ModvilTrackerPhotoElement);
preload.images("/ivanguys-web/nochepolar/st/v2026/img/tracker/localguides.svg");
const defaultAssetCount = 4;
const displayPhotoCount = 4;
const delayPhotoLoad = 750;
function chooseDefaultAsset() {
  const defaultPhotoAsset = "/ivanguys-web/nochepolar/st/v2026/img/tracker/default";
  const count = Math.floor(Math.random() * defaultAssetCount);
  return defaultPhotoAsset + count + '.png';
}
const sizeTarget = `=w480`;
const sizingRegexp = /(=\w\d+|)$/;
const lhHostnameRegexp = /^lh\d+\.googleusercontent\.com$/;
const urlForPhoto = url => {
  const lhServer = Math.random() < 0.5 ? 3 : 5;
  const urlBase = `https://lh${lhServer}.googleusercontent.com`;
  const u = new URL(url, urlBase);
  if (lhHostnameRegexp.test(u.hostname) || u.origin === urlBase) {
    u.pathname = u.pathname.replace(sizingRegexp, sizeTarget);
  }
  return u.toString();
};
function preparePhoto({
  url,
  attributionHtml,
  lg
}) {
  const node = document.createElement('modvil-tracker-photo');
  node.attributionHtml = attributionHtml;
  node.brand = lg;
  url = urlForPhoto(url);
  const {
    asset,
    promise
  } = prepareAsset(url);
  node.append(asset);
  return promise.then(() => node).catch(err => null);
}
function boundsDelta(a, b) {
  const mid = bounds => {
    return {
      x: (bounds.left + bounds.right) / 2,
      y: (bounds.top + bounds.bottom) / 2
    };
  };
  const am = mid(a);
  const bm = mid(b);
  const sx = a.width / b.width;
  const sy = a.height / b.height;
  return `translate(${am.x - bm.x}px, ${am.y - bm.y}px) scale(${sx}, ${sy})`;
}
class ModvilTrackerStatsElement extends LitElement {
  static get styles() {
    return [sheet$3];
  }
  static get properties() {
    return {
      open: {
        type: Boolean,
        reflect: true
      },
      destination: {
        type: Object
      },
      _previousDestination: {
        type: Object
      },
      _photoReady: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this._photoNode = document.createElement('div');
    this._photoNode.classList.add('photos');
    this._photoNode.addEventListener('transitionend', ev => {
      const node = ev.target;
      if (node.localName !== 'modvil-tracker-photo') {
        return;
      }
      node.toggleAttribute('large', this.open);
    });
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has('open')) {
      const all = Array.from(this._photoNode.children).map(node => {
        const {
          transform
        } = window.getComputedStyle(node);
        node.style.transform = 'none';
        const bounds = node.getBoundingClientRect();
        return {
          node,
          bounds,
          transform
        };
      });
      this._photoNode.classList.toggle('open', this.open);
      all.forEach(({
        node,
        bounds,
        transform
      }) => {
        if (transform === 'none') {
          transform = '';
        }
        const updated = node.getBoundingClientRect();
        node.style.transform = `${boundsDelta(bounds, updated)} ${transform}`;
      });
      all.forEach(({
        node
      }) => {
        this._photoNode.append(node);
        node.offsetLeft;
        node.style.transform = null;
      });
      if (!this.open) {
        all.forEach(({
          node
        }) => node.removeAttribute('large'));
      }
    }
    if (!changedProperties.has('destination')) {
      return true;
    }
    this._photoReady = false;
    this._previousDestination = changedProperties.get('destination');
    const photos = this.destination && this.destination.details && this.destination.details.photos || [];
    this.photosTask(this.destination, photos);
    return true;
  }
  _removePhoto(node) {
    if (!node) {
      return;
    }
    node.setAttribute('destroy', '');
    window.setTimeout(() => node.remove(), delayPhotoLoad / 2);
  }
  async photosTask(d, photos) {
    const previous = Array.from(this._photoNode.children).filter(node => !node.hasAttribute('destroy'));
    let count = displayPhotoCount;
    const positions = new Set();
    for (let i = 0; i < displayPhotoCount; ++i) {
      positions.add('' + i);
    }
    previous.forEach(node => positions.delete(node.getAttribute('data-position')));
    photos = photos.slice();
    for (let i = 0; i < displayPhotoCount; ++i) {
      photos.push({
        url: chooseDefaultAsset()
      });
    }
    const firstCount = photos.splice(0, count);
    photos.reverse();
    firstCount.reverse();
    photos.splice(0, 0, ...firstCount);
    while (photos.length && count) {
      const p = preparePhoto(photos.shift());
      const delay = timeout(delayPhotoLoad);
      const node = await p;
      await delay;
      if (this.destination !== d) {
        return false;
      }
      if (node === null) {
        continue;
      }
      this._photoReady = true;
      --count;
      let photoToReplace = null;
      if (this._photoNode.children.length >= displayPhotoCount) {
        photoToReplace = previous.pop();
      }
      this._removePhoto(photoToReplace);
      if (photoToReplace) {
        node.setAttribute('data-position', photoToReplace.getAttribute('data-position'));
      }
      if (!node.getAttribute('data-position')) {
        for (const v of positions) {
          node.setAttribute('data-position', v);
          positions.delete(v);
          break;
        }
        if (!node.getAttribute('data-position')) {
          console.warn('no known order for new photo', node);
        }
      }
      node.toggleAttribute('large', !!this.open);
      node.setAttribute('appear', '');
      this._photoNode.prepend(node);
      await node.updateComplete;
      await new Promise(resolve => {
        window.requestAnimationFrame(() => {
          node.removeAttribute('appear');
          resolve();
        });
      });
    }
    previous.forEach(node => {
      this._removePhoto(node);
    });
  }
  render() {
    const d = (this._photoReady ? this.destination : this._previousDestination) || {};
    return html`
<div class="outer">
  ${this._photoNode}

  <div class="view-closed">
    <div class="title ${this._photoReady ? '' : 'gone'}">
      <h1>${d.city}</h1>
      <h2>${d.region}</h2>
    </div>
    <button class="hint button-open" @click=${() => this.open = true}></button>
  </div>
  <div class="view-open">
    <button class="hint button-close" @click=${() => this.open = false}></button>
    <div class="top">
      <div class="title ${this._photoReady ? '' : 'gone'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/></svg>
        <h1>${d.city}, ${d.region}</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    </div>
  </div>
</div>
    `;
  }
}
customElements.define('modvil-tracker-photos', ModvilTrackerStatsElement);
const sheet$1 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$1.replaceSync(":host{display:inline-block;position:relative;z-index:1000001}.mailbox-button{appearance:none;border:none;background:none;padding:0;display:block;cursor:pointer;position:relative;transform-origin:50% 100%;transition:transform .2s ease}.mailbox-button:hover{transform:scale(1.06)}.mailbox-button:focus-visible{outline:3px solid #fff;outline-offset:4px;border-radius:12px}.mailbox-button.receiving{animation:mailbox-bounce .6s ease 1.4s}.mailbox-icon{display:block;width:104px;height:95px;filter:drop-shadow(1px 2px 0 rgba(0, 0, 0, 0.25))}.unread-dot{position:absolute;top:0;left:0;background:#ffeb3b;color:#212121;font-size:11px;font-weight:800;min-width:20px;height:20px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;padding:0 4px;box-shadow:0 2px 4px rgba(0,0,0,.3)}.fly-in-preview{position:fixed;top:50%;left:50%;width:240px;aspect-ratio:4/3;background:#fff;padding:6px;border-radius:10px;box-shadow:0 16px 36px rgba(0,0,0,.45);z-index:900;pointer-events:auto;cursor:pointer;opacity:0;transform:translate(-50%, -50%)}.fly-in-preview img{width:100%;height:100%;object-fit:cover;border-radius:6px}.fly-in-preview span{position:absolute;bottom:12px;left:14px;color:#fff;font-family:\"Lobster\",cursive,sans-serif;font-size:20px;text-shadow:0 2px 4px rgba(0,0,0,.8)}@keyframes mailbox-bounce{0%,100%{transform:scale(1)}40%{transform:scale(1.22)}70%{transform:scale(0.93)}}.scrim{position:fixed;inset:0;z-index:1000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:72px 16px 24px;box-sizing:border-box;background:rgba(10,30,40,.38);color:#fff;overflow-y:auto;animation:scrim-in .2s ease-out}@keyframes scrim-in{from{opacity:0}}.close-btn{appearance:none;border:none;cursor:pointer;position:absolute;top:16px;right:16px;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#dc1e23;box-shadow:0 3px 0 #9b1519,2px 4px 0 rgba(0,0,0,.1);transition:transform .2s,box-shadow .2s}.close-btn svg{width:60%;height:60%;fill:#fff}.close-btn:hover{transform:translateY(-2px);box-shadow:0 5px 0 #9b1519,3px 6px 0 rgba(0,0,0,.1)}.close-btn:active{transform:translateY(3px);box-shadow:0 0 0 #9b1519}.close-btn:focus-visible{outline:3px solid #fff;outline-offset:3px}.slot-frame{position:relative;z-index:1;background:#dc1e23;padding:10px;border-radius:14px;box-shadow:0 5px 0 #9b1519,5px 5px 0 rgba(0,0,0,.1);animation:card-in .25s ease-out}@keyframes card-in{from{opacity:0;transform:translateY(12px) scale(0.97)}}.gallery-panel{width:min(960px, 100%);max-height:100%;display:flex;flex-direction:column;background:#fffaf0;border:8px solid #dc1e23;border-radius:16px;box-shadow:0 14px 36px rgba(0,0,0,.35);overflow:hidden;animation:card-in .25s ease-out}.gallery-header{display:grid;grid-template-columns:44px 1fr 44px;align-items:center;gap:8px;padding:12px 16px;background:#dc1e23;color:#fff}.gallery-header h2{margin:0;text-align:center;font-family:\"Lobster\",cursive,sans-serif;font-weight:normal;font-size:26px}.gallery-header .count{justify-self:end;font-weight:700;opacity:.9}.icon-btn{appearance:none;border:none;cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.95);box-shadow:0 2px 0 rgba(0,0,0,.25);transition:transform .15s ease,background .15s ease}.icon-btn svg{width:60%;height:60%;fill:#dc1e23}.icon-btn:hover{transform:scale(1.08)}.icon-btn:focus-visible{outline:3px solid #fff;outline-offset:3px}.icon-btn[hidden]{visibility:hidden}.icon-btn{width:44px;height:44px}.back-btn svg{transform:scaleX(-1)}.carousel{display:flex;align-items:center;justify-content:center;max-width:100%}.nav-tab{appearance:none;border:none;padding:0;cursor:pointer;flex:0 0 auto;position:relative;z-index:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:80px;height:120px;background:#dc1e23;box-shadow:0 5px 0 #9b1519,3px 5px 0 rgba(0,0,0,.1);transition:transform .2s,box-shadow .2s;--tab-radius: 40px}.nav-tab::after{content:\"\";position:absolute;top:6px;bottom:6px;border:2px dashed rgba(255,255,255,.6);pointer-events:none}.nav-tab svg{width:44px;height:44px;overflow:visible;fill:none;stroke:#fff;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.nav-tab.prev{margin-right:-12px;padding-right:12px;border-radius:var(--tab-radius) 6px 6px var(--tab-radius)}.nav-tab.prev::after{left:6px;right:18px;border-radius:calc(var(--tab-radius) - 6px) 3px 3px calc(var(--tab-radius) - 6px)}.nav-tab.prev svg{transform:scaleX(-1)}.nav-tab.next{margin-left:-12px;padding-left:12px;border-radius:6px var(--tab-radius) var(--tab-radius) 6px}.nav-tab.next::after{right:6px;left:18px;border-radius:3px calc(var(--tab-radius) - 6px) calc(var(--tab-radius) - 6px) 3px}.nav-tab:hover{transform:translateY(-2px);box-shadow:0 7px 0 #9b1519,4px 7px 0 rgba(0,0,0,.1)}.nav-tab:active{transform:translateY(4px);box-shadow:0 1px 0 #9b1519}.nav-tab:focus-visible{outline:3px solid #fff;outline-offset:3px}.nav-tab[hidden]{visibility:hidden}@media(max-width: 600px){.nav-tab{width:62px;height:96px;--tab-radius: 31px}.nav-tab svg{width:34px;height:34px}}.carousel-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:14px;margin-top:22px}.pill-btn{--edge: 3px;--lift: 2px;appearance:none;border:none;cursor:pointer;position:relative;isolation:isolate;display:inline-flex;align-items:center;border-radius:1000px;padding:5px 18px 5px 5px;font-family:\"Google Sans\",\"Arial\",sans-serif;font-weight:500;font-size:16px;white-space:nowrap;background:var(--face);color:var(--text);transition:transform .2s}.pill-btn::after,.pill-btn::before{content:\"\";position:absolute;inset:0;border-radius:inherit;background:inherit;pointer-events:none}.pill-btn::after{z-index:-1}.pill-btn::before{z-index:-2;transform:translateY(var(--edge));box-shadow:inset 0 -20px 0 var(--side),2px 2px 0 rgba(0,0,0,.1);transition:transform .2s,box-shadow .2s}.pill-btn:hover{transform:translateY(calc(-1 * var(--lift)))}.pill-btn:hover::before{transform:translateY(calc(var(--edge) + var(--lift)));box-shadow:inset 0 -20px 0 var(--side),3px 3px 0 rgba(0,0,0,.1)}.pill-btn:active{transform:translateY(var(--edge))}.pill-btn:active::before{transform:translateY(0);box-shadow:inset 0 -20px 0 var(--side)}.pill-btn:focus-visible{outline:3px solid #fff;outline-offset:5px}.pill-btn .badge{box-sizing:border-box;flex:0 0 auto;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--badge)}.pill-btn .badge svg{width:20px;height:20px;fill:var(--icon)}.pill-btn .label{padding-left:10px}.pill-btn.primary{--face: #dc1e23;--side: rgba(0, 0, 0, 0.3);--text: #fff;--badge: #fff;--icon: #dc1e23}.pill-btn.secondary{--face: #fff;--side: rgba(120, 20, 20, 0.18);--text: #dc1e23;--badge: #dc1e23;--icon: #fff}.gallery-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:20px;padding:20px;overflow-y:auto}.grid-card{appearance:none;border:none;cursor:pointer;background:#fff;padding:6px 6px 10px;border-radius:8px;box-shadow:0 3px 0 rgba(0,0,0,.2);display:flex;flex-direction:column;gap:8px;transition:transform .15s ease}.grid-card:nth-child(odd){transform:rotate(-1.5deg)}.grid-card:nth-child(even){transform:rotate(1.5deg)}.grid-card:hover,.grid-card:focus-visible{transform:rotate(0) scale(1.04)}.grid-card img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:4px}.grid-card span{color:#212121;font-weight:700;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.empty-msg{color:#fff;font-size:18px;text-align:center;background:rgba(255,255,255,.12);padding:24px 32px;border-radius:12px}");
const POSTCARD_SHARED_ASSETS = {
  mailboxUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/mailbox.png",
  stampUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/postcard_stamp.svg",
  geminiSparkUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/gemini_spark.png",
  postmarkUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/postcard_postmark.png"
};
const POSTCARD_UI_STRINGS = {
  mailboxLabel: () => "Santa's Postcards",
  flip: () => "Flip",
  flipToBack: () => "Flip to read note",
  flipToFront: () => "Flip to front",
  download: () => "Download postcard",
  share: () => "Share postcard",
  journalTitle: () => "Santa's Travel Journal",
  recipientName: () => "Mrs. Claus",
  recipientStreet: () => "123 Elf Road",
  recipientCity: () => "North Pole, 88888",
  madeWithGemini: () => "Made with Gemini",
  nextStop: city => "Off to {city} next!".replace('{city}', city),
  santaSignature: () => "Santa",
  emptyMailbox: () => "No postcards yet! Check back as Santa visits stops around the world.",
  previous: () => "Previous postcard",
  next: () => "Next postcard",
  viewAll: () => "See all postcards",
  back: () => "Back to postcard",
  close: () => "Close mailbox"
};
const POSTCARDS_BY_STOP_ID = {
  provideniya: {
    id: 'provideniya',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/provideniya.jpg",
    postmarkDay: 24,
    getMessage: () => "Our very first stop of the night in snowy Provideniya! The reindeer dashed right over Emma Bay while the harbor lights twinkled across the ice."
  },
  anadyr: {
    id: 'anadyr',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/anadyr.jpg",
    postmarkDay: 24,
    getMessage: () => "Even in the frosty winter night, the brightly painted houses of Anadyr are glowing with holiday cheer! Dasher and Dancer are already hitting their stride."
  },
  'petropavlovsk-kamchatsky': {
    id: 'petropavlovsk-kamchatsky',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/petropavlovsk-kamchatsky.jpg",
    postmarkDay: 24,
    getMessage: () => "What a majestic view over Avacha Bay! We glided past the snow-capped volcanoes of Kamchatka under a blanket of sparkling stars."
  },
  bikini: {
    id: 'bikini',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/bikini.jpg",
    postmarkDay: 24,
    getMessage: () => "From snowy peaks straight to the warm Pacific breeze! The turquoise ring of Bikini Atoll is shimmering beneath the moonlight tonight."
  },
  majuro: {
    id: 'majuro',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/majuro.jpg",
    postmarkDay: 24,
    getMessage: () => "Swooping low over the narrow coral islands of Majuro! The ocean waves are gently lapping the shore as we deliver gifts along the lagoon."
  },
  tarawa: {
    id: 'tarawa',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/tarawa.jpg",
    postmarkDay: 24,
    getMessage: () => "Mauri from Tarawa! The palm fronds are rustling in the warm equatorial breeze while Rudolph leads the sleigh across the bright coral reefs."
  },
  funafuti: {
    id: 'funafuti',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/funafuti.jpg",
    postmarkDay: 24,
    getMessage: () => "Gliding over the crystal-clear lagoon of Funafuti! The stars are reflecting off the calm Pacific waters like thousands of tiny lanterns."
  },
  atafu: {
    id: 'atafu',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/atafu.jpg",
    postmarkDay: 24,
    getMessage: () => "The coral lagoon in Atafu is glowing under the night sky! The reindeer loved skimming right above the coconut palms."
  },
  apia: {
    id: 'apia',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/apia.jpg",
    postmarkDay: 24,
    getMessage: () => "Talofa from Apia! Warm tropical air and festive island songs greeted us as we circled above Mount Vaea and the harbor."
  },
  suva: {
    id: 'suva',
    frontUrl: "/ivanguys-web/nochepolar/st/v2026/img/postcards/suva.jpg",
    postmarkDay: 24,
    getMessage: () => "Bula from Suva! The lush green hills and harbor lights of Fiji looked magical as we delivered presents across the island."
  }
};
function getPostcardForDestination(destination, nextDestination = null) {
  if (!destination || !destination.id) {
    return null;
  }
  const entry = POSTCARDS_BY_STOP_ID[destination.id];
  if (!entry) {
    return null;
  }
  return {
    id: entry.id,
    city: destination.city || '',
    region: destination.region || '',
    frontUrl: entry.frontUrl,
    postmarkDay: entry.postmarkDay,
    nextCity: nextDestination && nextDestination.id !== 'landing' ? nextDestination.city || '' : '',
    message: entry.getMessage()
  };
}
const sheet = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet.replaceSync(":host{display:block;font-family:\"Roboto\",\"Google Sans\",sans-serif;user-select:none}.postcard-wrapper{display:flex;flex-direction:column;align-items:center;gap:12px}.postcard-scene{container-type:inline-size;width:min(640px, calc(100vw - 200px), calc((100vh - 220px) * 4 / 3));aspect-ratio:4/3;perspective:1200px;cursor:pointer;position:relative;outline:none}@media(max-width: 600px){.postcard-scene{width:min(calc(100vw - 132px), calc((100vh - 220px) * 4 / 3))}}.postcard-scene:focus-visible .postcard-face{box-shadow:0 0 0 4px #ffeb3b,0 12px 32px rgba(0,0,0,.35)}.postcard-face{position:absolute;inset:0;border-radius:12px;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;transition:transform .65s cubic-bezier(0.22, 1, 0.36, 1);box-shadow:0 12px 28px rgba(0,0,0,.3);background:#fffdf7;border:6px solid #fff;box-sizing:border-box}.postcard-front{transform:rotateY(0deg)}.postcard-back{transform:rotateY(180deg)}.postcard-scene.is-flipped .postcard-front{transform:rotateY(-180deg)}.postcard-scene.is-flipped .postcard-back{transform:rotateY(0deg)}.front-illustration{width:100%;height:100%;object-fit:cover;display:block}.front-overlay{position:absolute;inset:auto 0 0 0;padding:24px 16px 12px;background:linear-gradient(transparent, rgba(0, 0, 0, 0.72));color:#fff;display:flex;justify-content:space-between;align-items:flex-end;gap:8px}.location-label{display:flex;flex-direction:column;text-shadow:0 1px 3px rgba(0,0,0,.6)}.location-label .city{font-family:\"Lobster\",cursive,sans-serif;font-size:26px;line-height:1.1}.location-label .region{font-size:13px;opacity:.9}.postcard-back{display:grid;grid-template-columns:1.12fr 1.5px 1fr;column-gap:4.5cqw;padding:5cqw 4.5cqw 3.6cqw;background:#e9dcc3;color:#2b2622}.back-left{display:flex;flex-direction:column;min-height:0}.journal-title{margin:0 0 3.4cqw;padding-bottom:1.6cqw;border-bottom:.35cqw solid #b9ab93;font:500 2cqw/1.2 \"Roboto\",\"Google Sans\",sans-serif;letter-spacing:.22em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;color:#3d3731}.dispatch-message,.dispatch-next{margin:0;font-family:\"Comic Neue\",\"Comic Sans MS\",\"Chalkboard SE\",\"Patrick Hand\",cursive,sans-serif;font-size:3.4cqw;line-height:1.4;white-space:pre-line;overflow-wrap:break-word}.dispatch-next{margin-top:1.4em}.dispatch-signature{margin:3cqw 0 0;text-align:end;font-family:\"Lobster\",\"Brush Script MT\",cursive;font-size:3.8cqw;color:#2b2622}.back-divider{background:#2b2622;opacity:.75;margin:8cqw 0 4cqw}.back-right{position:relative;display:flex;flex-direction:column;min-height:0}.stamp{position:absolute;top:-3cqw;inset-inline-end:-1cqw;width:15cqw;aspect-ratio:150/180;transform:rotate(2deg)}.stamp .stamp-frame{display:block;width:100%;height:100%}.stamp .stamp-spark{position:absolute;left:50%;top:50%;width:56%;transform:translate(-50%, -50%)}.postmark{position:absolute;top:7cqw;inset-inline-end:6cqw;width:31cqw;height:auto;color:#443a32;overflow:visible;transform:rotate(-4deg)}.postmark .pm-arc{font:600 50px \"Roboto\",sans-serif;letter-spacing:.1em;text-transform:uppercase;fill:currentColor}.postmark .pm-brand{font-size:40px;letter-spacing:.02em;text-transform:none}.postmark .pm-date{font:500 62px \"Roboto\",sans-serif;text-transform:uppercase;fill:currentColor}.address{margin-top:auto;display:flex;flex-direction:column}.address-line{display:flex;align-items:flex-end;height:6.4cqw;padding:0 1.2cqw .5cqw;box-sizing:border-box;border-bottom:.25cqw solid #b9ab93;font-family:\"Comic Neue\",\"Comic Sans MS\",\"Chalkboard SE\",\"Patrick Hand\",cursive,sans-serif;font-size:3.1cqw;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.back-footer{margin-top:3cqw;text-align:end;font:400 1.9cqw/1.2 \"Roboto\",sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#8a8174}.postcard-actions{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}.action-btn{appearance:none;border:none;background:#fff;color:#1f1f1f;font-weight:600;font-size:13px;padding:8px 14px;border-radius:999px;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.2)}.action-btn:hover{background:#f1f3f4}");
function postmarkDate(day) {
  const lang = document.documentElement.lang || undefined;
  const date = new Date(Date.UTC(new Date().getUTCFullYear(), 11, day));
  const opts = {
    timeZone: 'UTC'
  };
  return {
    month: new Intl.DateTimeFormat(lang, {
      ...opts,
      month: 'short'
    }).format(date),
    day: new Intl.DateTimeFormat(lang, {
      ...opts,
      day: 'numeric'
    }).format(date)
  };
}
function renderPostmark(p) {
  const {
    month,
    day
  } = postmarkDate(p.postmarkDay || 24);
  const cityFontSize = Math.max(32, Math.min(50, Math.floor(500 / (Math.max(1, p.city.length) * 0.65))));
  return html`
    <svg class="postmark" viewBox="0 0 965 562" aria-hidden="true">
      <defs>
        <!-- Ring centre (683, 281) and radii are measured from postcard_postmark.png. -->
        <path id="pm-top" d="M499 281 a184 184 0 0 1 368 0" />
        <path id="pm-bottom" d="M455 281 a228 228 0 0 0 456 0" />
      </defs>
      <image href=${POSTCARD_SHARED_ASSETS.postmarkUrl} width="965" height="562" />
      <text class="pm-arc" style="font-size: ${cityFontSize}px">
        <textPath href="#pm-top" startOffset="50%" text-anchor="middle">${p.city}</textPath>
      </text>
      <text class="pm-arc pm-brand">
        <textPath href="#pm-bottom" startOffset="50%" text-anchor="middle">${POSTCARD_UI_STRINGS.madeWithGemini()}</textPath>
      </text>
      <text class="pm-date" x="683" y="268" text-anchor="middle">${month}</text>
      <text class="pm-date" x="683" y="345" text-anchor="middle">${day}</text>
    </svg>
  `;
}
class ModvilTrackerPostcard extends LitElement {
  static get styles() {
    return [sheet];
  }
  static get properties() {
    return {
      postcard: {
        type: Object
      },
      flipped: {
        type: Boolean,
        reflect: true
      },
      interactive: {
        type: Boolean
      },
      showActions: {
        type: Boolean,
        attribute: 'show-actions'
      }
    };
  }
  constructor() {
    super();
    this.postcard = null;
    this.flipped = false;
    this.interactive = true;
    this.showActions = false;
  }
  updated(changedProps) {
    if (changedProps.has('postcard')) {
      const prev = changedProps.get('postcard');
      const prevId = prev ? prev.id : null;
      const nextId = this.postcard ? this.postcard.id : null;
      if (prevId !== nextId) {
        this.flipped = false;
      }
    }
    if (changedProps.has('flipped')) {
      this.dispatchEvent(new CustomEvent('flipped-changed', {
        detail: {
          flipped: this.flipped
        }
      }));
    }
  }
  _toggleFlip(ev) {
    if (!this.interactive) {
      return;
    }
    if (ev) {
      ev.stopPropagation();
    }
    this.flipped = !this.flipped;
  }
  _onKeyDown(ev) {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      this._toggleFlip(ev);
    }
  }
  async _onDownload(ev) {
    ev.stopPropagation();
    if (!this.postcard || !this.postcard.frontUrl) {
      return;
    }
    const link = document.createElement('a');
    link.href = this.postcard.frontUrl;
    link.download = `santa-postcard-${this.postcard.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  async _onShare(ev) {
    ev.stopPropagation();
    if (!this.postcard || !navigator.share) {
      return this._onDownload(ev);
    }
    try {
      await navigator.share({
        title: `${this.postcard.city} — Santa Tracker`,
        text: this.postcard.message,
        url: window.location.href
      });
    } catch (err) {}
  }
  render() {
    const p = this.postcard;
    if (!p) {
      return html``;
    }
    const flipLabel = this.flipped ? POSTCARD_UI_STRINGS.flipToFront() : POSTCARD_UI_STRINGS.flipToBack();
    return html`
      <div class="postcard-wrapper">
        <div
          class="postcard-scene ${this.flipped ? 'is-flipped' : ''}"
          role="button"
          tabindex="0"
          aria-label=${flipLabel}
          @click=${this._toggleFlip}
          @keydown=${this._onKeyDown}
        >
          <div class="postcard-face postcard-front" ?inert=${this.flipped}>
            <img
              class="front-illustration"
              src=${p.frontUrl}
              alt="${p.city}, ${p.region}"
              loading="lazy"
            />
            <div class="front-overlay">
              <div class="location-label">
                <span class="city">${p.city}</span>
                <span class="region">${p.region}</span>
              </div>
            </div>
          </div>

          <div class="postcard-face postcard-back" ?inert=${!this.flipped}>
            <div class="back-left">
              <h3 class="journal-title">${POSTCARD_UI_STRINGS.journalTitle()}</h3>
              <p class="dispatch-message">${p.message}</p>
              ${p.nextCity ? html`<p class="dispatch-next">${POSTCARD_UI_STRINGS.nextStop(p.nextCity)}</p>` : ''}
              <p class="dispatch-signature">${POSTCARD_UI_STRINGS.santaSignature()}</p>
            </div>

            <div class="back-divider" aria-hidden="true"></div>

            <div class="back-right">
              <div class="stamp" aria-hidden="true">
                <img class="stamp-frame" src=${POSTCARD_SHARED_ASSETS.stampUrl} alt="" />
                <img class="stamp-spark" src=${POSTCARD_SHARED_ASSETS.geminiSparkUrl} alt="" />
              </div>
              ${renderPostmark(p)}
              <div class="address">
                <div class="address-line">${POSTCARD_UI_STRINGS.recipientName()}</div>
                <div class="address-line">${POSTCARD_UI_STRINGS.recipientStreet()}</div>
                <div class="address-line">${POSTCARD_UI_STRINGS.recipientCity()}</div>
                <div class="address-line"></div>
              </div>
              <div class="back-footer">${[p.city, p.region].filter(Boolean).join(', ')}</div>
            </div>
          </div>
        </div>

        ${this.interactive && this.showActions ? html`
              <div class="postcard-actions">
                <button class="action-btn" @click=${this._toggleFlip}>
                  🔄 ${flipLabel}
                </button>
                <button class="action-btn" @click=${this._onDownload}>
                  ⬇️ ${POSTCARD_UI_STRINGS.download()}
                </button>
                ${typeof navigator.share === 'function' ? html`
                      <button class="action-btn" @click=${this._onShare}>
                        📤 ${POSTCARD_UI_STRINGS.share()}
                      </button>
                    ` : ''}
              </div>
            ` : ''}
      </div>
    `;
  }
}
customElements.define('modvil-tracker-postcard', ModvilTrackerPostcard);
const arrowSvg = html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 5.4 10 4l8 8-8 8-1.4-1.4L15.2 12z"/></svg>`;
const tabChevronSvg = html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5"/></svg>`;
const flipSvg = html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>`;
const gridSvg = html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"/></svg>`;
const closeSvg = html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/></svg>`;
class ModvilTrackerMailbox extends LitElement {
  static get styles() {
    return [sheet$1];
  }
  static get properties() {
    return {
      destinations: {
        type: Array
      },
      stops: {
        type: Array
      },
      open: {
        type: Boolean,
        reflect: true
      },
      _selectedIndex: {
        type: Number
      },
      _flyInPostcard: {
        type: Object
      },
      _unreadCount: {
        type: Number
      },
      _view: {
        type: String
      },
      _flipped: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.destinations = [];
    this.stops = [];
    this.open = false;
    this._selectedIndex = 0;
    this._flyInPostcard = null;
    this._unreadCount = 0;
    this._lastSeenStopId = null;
    this._view = 'carousel';
    this._flipped = false;
    this._onKeyDown = this._onKeyDown.bind(this);
  }
  get collectedPostcards() {
    if (!this.destinations || !this.stops || !this.stops.length) {
      return [];
    }
    const visitedSet = new Set(this.stops);
    const collected = [];
    this.destinations.forEach((dest, i) => {
      if (visitedSet.has(dest.id)) {
        const card = getPostcardForDestination(dest, this.destinations[i + 1]);
        if (card) {
          collected.push(card);
        }
      }
    });
    return collected.reverse();
  }
  updated(changedProps) {
    if (changedProps.has('stops') && this.stops && this.stops.length) {
      const latestStopId = this.stops[this.stops.length - 1];
      if (this._lastSeenStopId && latestStopId !== this._lastSeenStopId) {
        const destObj = (this.destinations || []).find(d => d.id === latestStopId);
        const newCard = getPostcardForDestination(destObj);
        if (newCard) {
          this._triggerFlyIn(newCard);
        }
      }
      this._lastSeenStopId = latestStopId;
    }
  }
  async _triggerFlyIn(postcard) {
    this._flyInPostcard = postcard;
    if (!this.open) {
      this._unreadCount += 1;
    }
    if (this._flyInAnimation) {
      this._flyInAnimation.cancel();
    }
    await this.updateComplete;
    const preview = this.renderRoot.querySelector('.fly-in-preview');
    const button = this.renderRoot.querySelector('.mailbox-button');
    if (!preview || !button) {
      this._flyInPostcard = null;
      return;
    }
    const target = button.getBoundingClientRect();
    const dx = target.left + target.width * 0.3 - window.innerWidth / 2;
    const dy = target.top + target.height * 0.6 - window.innerHeight / 2;
    const center = 'translate(-50%, -50%)';
    this._flyInAnimation = preview.animate([{
      transform: `${center} scale(0.3) rotate(-8deg)`,
      opacity: 0
    }, {
      transform: `${center} scale(1.05) rotate(2deg)`,
      opacity: 1,
      offset: 0.18
    }, {
      transform: `${center} scale(1) rotate(0deg)`,
      opacity: 1,
      offset: 0.72
    }, {
      transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.1) rotate(12deg)`,
      opacity: 0
    }], {
      duration: 2100,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    });
    this._flyInAnimation.onfinish = () => {
      this._flyInPostcard = null;
      this._flyInAnimation = null;
    };
  }
  _toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this._unreadCount = 0;
      this._selectedIndex = 0;
      this._view = 'carousel';
      this._flipped = false;
      window.addEventListener('keydown', this._onKeyDown);
    } else {
      window.removeEventListener('keydown', this._onKeyDown);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._onKeyDown);
  }
  _onKeyDown(ev) {
    if (ev.key === 'Escape') {
      this._toggleOpen();
    } else if (this._view === 'carousel' && ev.key === 'ArrowLeft') {
      this._step(-1);
    } else if (this._view === 'carousel' && ev.key === 'ArrowRight') {
      this._step(+1);
    }
  }
  _step(delta) {
    const count = this.collectedPostcards.length;
    if (count < 2) {
      return;
    }
    this._selectedIndex = (this._selectedIndex + delta + count) % count;
    this._flipped = false;
  }
  _toggleFlip() {
    this._flipped = !this._flipped;
  }
  _onFlippedChanged(ev) {
    this._flipped = ev.detail.flipped;
  }
  _onScrimClick(ev) {
    if (ev.target === ev.currentTarget) {
      this._toggleOpen();
    }
  }
  _openGallery() {
    this._view = 'gallery';
  }
  _openFromGallery(idx) {
    this._selectedIndex = idx;
    this._flipped = false;
    this._view = 'carousel';
  }
  _renderCarousel(cards) {
    const index = Math.min(this._selectedIndex, cards.length - 1);
    const activeCard = cards[index];
    const multiple = cards.length > 1;
    const flipLabel = this._flipped ? POSTCARD_UI_STRINGS.flipToFront() : POSTCARD_UI_STRINGS.flipToBack();
    return html`
      <div class="carousel">
        <button
          class="nav-tab prev"
          ?hidden=${!multiple}
          aria-label=${POSTCARD_UI_STRINGS.previous()}
          @click=${() => this._step(-1)}
        >${tabChevronSvg}</button>
        <div class="slot-frame">
          <modvil-tracker-postcard
            .postcard=${activeCard}
            .flipped=${this._flipped}
            @flipped-changed=${this._onFlippedChanged}
          ></modvil-tracker-postcard>
        </div>
        <button
          class="nav-tab next"
          ?hidden=${!multiple}
          aria-label=${POSTCARD_UI_STRINGS.next()}
          @click=${() => this._step(+1)}
        >${tabChevronSvg}</button>
      </div>
      <div class="carousel-footer">
        <button class="pill-btn primary" aria-label=${flipLabel} @click=${this._toggleFlip}>
          <span class="badge">${flipSvg}</span>
          <span class="label">${POSTCARD_UI_STRINGS.flip()}</span>
        </button>
        <button class="pill-btn secondary" @click=${this._openGallery}>
          <span class="badge">${gridSvg}</span>
          <span class="label">${POSTCARD_UI_STRINGS.viewAll()}</span>
        </button>
      </div>
    `;
  }
  _renderGallery(cards) {
    return html`
      <div class="gallery-panel">
        <div class="gallery-header">
          <button class="icon-btn back-btn" aria-label=${POSTCARD_UI_STRINGS.back()} @click=${() => this._view = 'carousel'}>${arrowSvg}</button>
          <h2>${POSTCARD_UI_STRINGS.mailboxLabel()}</h2>
          <span class="count">${cards.length}</span>
        </div>
        <div class="gallery-grid" role="list">
          ${cards.map((card, idx) => html`
              <button class="grid-card" role="listitem" @click=${() => this._openFromGallery(idx)}>
                <img src=${card.frontUrl} alt="" loading="lazy" />
                <span>${card.city}</span>
              </button>
            `)}
        </div>
      </div>
    `;
  }
  render() {
    const cards = this.collectedPostcards;
    let body;
    if (!cards.length) {
      body = html`<p class="empty-msg">${POSTCARD_UI_STRINGS.emptyMailbox()}</p>`;
    } else if (this._view === 'gallery') {
      body = this._renderGallery(cards);
    } else {
      body = this._renderCarousel(cards);
    }
    return html`
      <button
        class="mailbox-button ${this._flyInPostcard ? 'receiving' : ''}"
        aria-label=${POSTCARD_UI_STRINGS.mailboxLabel()}
        @click=${this._toggleOpen}
      >
        <img class="mailbox-icon" src=${POSTCARD_SHARED_ASSETS.mailboxUrl} alt="" width="104" height="95" />
        ${this._unreadCount > 0 ? html`<span class="unread-dot">${this._unreadCount}</span>` : ''}
      </button>

      ${this._flyInPostcard ? html`
            <div class="fly-in-preview" @click=${this._toggleOpen}>
              <img src=${this._flyInPostcard.frontUrl} alt="" />
              <span>${this._flyInPostcard.city}</span>
            </div>
          ` : ''}

      ${this.open ? html`
            <div
              class="scrim"
              role="dialog"
              aria-modal="true"
              aria-label=${POSTCARD_UI_STRINGS.mailboxLabel()}
              @click=${this._onScrimClick}
            >
              <button class="close-btn" aria-label=${POSTCARD_UI_STRINGS.close()} @click=${this._toggleOpen}>${closeSvg}</button>
              ${body}
            </div>
          ` : ''}
    `;
  }
}
customElements.define('modvil-tracker-mailbox', ModvilTrackerMailbox);
preload.images("/ivanguys-web/nochepolar/st/v2026/img/tracker/marker.png", "/ivanguys-web/nochepolar/st/v2026/img/tracker/northpole.png");
const focusTimeoutDelay = 20 * 1000;
if (!localStorage['routeJitter']) {
  localStorage['routeJitter'] = Math.random() * 2 - 1;
}
const routeJitterRatio = +localStorage['routeJitter'] || 0;
class ModvilTrackerElement extends LitElement {
  static get styles() {
    return [sheet$7];
  }
  static get properties() {
    return {
      _width: {
        type: Number
      },
      destinations: {
        type: Array
      },
      now: {
        type: Number
      },
      _ready: {
        type: Boolean
      },
      _focusOnSanta: {
        type: Boolean
      },
      _stops: {
        type: Array
      },
      _temporaryDestination: {
        type: Object
      },
      trackerOffset: {
        type: Number,
        attribute: 'tracker-offset'
      }
    };
  }
  constructor() {
    super();
    this.trackerOffset = 0;
    this.routeJitter = 0;
    this._map = null;
    this._dataManager = null;
    this._stopManager = null;
    this._details = null;
    this._closestArrival = 0;
    this._focusOnSanta = true;
    this._focusTimeout = 0;
    this._duringMapChange = false;
    this._duringResize = false;
    this._width = 0;
    this._mapNode = document.createElement('div');
    this._mapNode.classList.add('map');
    this._santaNode = document.createElement('santa-santa');
    this._infoNode = document.createElement('div');
    this._photosNode = document.createElement('div');
    this._preparePromise = this.prepareMaps().then(() => {
      this._ready = true;
      const tilesPromise = new Promise(resolve => {
        const listener = this._map.addListener('tilesloaded', () => {
          google.maps.event.removeListener(listener);
          resolve();
        });
      });
      const timeoutPromise = new Promise(r => window.setTimeout(r, 1500));
      return Promise.race([tilesPromise, timeoutPromise]);
    }).catch(err => {
      console.error('failed to build modvil-tracker', err);
    });
    preload.wait(this._preparePromise);
    const updateNow = () => {
      const jitter = routeJitterRatio * this.routeJitter * 1000;
      this.now = +new Date() + this.trackerOffset + jitter;
    };
    updateNow();
    window.setInterval(updateNow, 1000);
    this._onWindowResize = this._onWindowResize.bind(this);
  }
  _onWindowResize() {
    this._duringResize = true;
    window.requestAnimationFrame(() => {
      this._duringResize = false;
      this._width = window.innerWidth;
    });
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._onWindowResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._onWindowResize);
  }
  focusOnSanta() {
    this._focusOnSanta = true;
  }
  shouldUpdate(changedProperties) {
    if (!this._ready) {
      return true;
    }
    if (changedProperties.has('_ready') || changedProperties.has('_width')) {
      const mobileMode = this._width <= 600;
      this._map.setOptions({
        gestureHandling: mobileMode ? 'none' : 'auto',
        zoomControl: !mobileMode
      });
      if (mobileMode) {
        this._focusOnSanta = true;
        window.clearTimeout(this._focusTimeout);
      }
      const bounds = this._infoNode.getBoundingClientRect();
      this._infoOffsetNode.style.height = `${bounds.height}px`;
    }
    if (changedProperties.has('_focusOnSanta')) {
      window.clearTimeout(this._focusTimeout);
      if (!this._focusOnSanta) {
        this._focusTimeout = window.setTimeout(() => {
          this._focusOnSanta = true;
        }, focusTimeoutDelay);
      } else {
        this._temporaryDestination = null;
      }
    }
    if (changedProperties.has('_ready') || changedProperties.has('destinations')) {
      this._stopManager.destroy();
      this._dataManager = new DataManager(this.destinations || []);
      this._dataManager.now = this.now;
      this._stopManager = new StopManager(this._map, this._dataManager, this._onMarkerClick.bind(this));
      this._stopManager.update();
      this._closestArrival = this._dataManager.closestArrival(this._userLocation);
    } else if (changedProperties.has('_ready') || changedProperties.has('now')) {
      this._dataManager.now = this.now;
      this._stopManager.update();
    } else if (changedProperties.has('_focusOnSanta') && this._focusOnSanta) ;else {
      return true;
    }
    const details = this._dataManager.details;
    this._santaOverlay.position = new google.maps.LatLng(details.location.lat, details.location.lng);
    this._santaNode.heading = details.heading;
    this._santaNode.stop = details.stop;
    this._santaNode.hidden = details.home;
    this._details = details;
    if ((this._stops || []).length !== details.visibleTo + 1) {
      this._stops = (this.destinations || []).slice(0, details.visibleTo + 1).map(({
        id
      }) => id);
    }
    if (this._focusOnSanta) {
      let offset = details.stop ? 1 : 0;
      if (details.home) {
        offset = -10;
      }
      this._setLocation(this._santaOverlay.position, offset);
    }
    return true;
  }
  _setLocation(location, offset) {
    try {
      this._duringMapChange = true;
      let usableMap = this._infoNode.offsetTop;
      if (this._photosNode.open) {
        usableMap -= 100;
      }
      if (this._width > 600) {
        usableMap += 40;
      }
      const min = (Math.min(1024, window.innerWidth) + usableMap) / 2;
      let zoom = Math.round(min / 160) + offset;
      zoom = Math.max(2, Math.min(6, zoom));
      const shift = this.offsetHeight - usableMap;
      const bounds = new google.maps.LatLngBounds(location, location);
      this._map.fitBounds(bounds);
      this._map.setZoom(zoom);
      this._map.panBy(0, shift / 2);
    } finally {
      this._duringMapChange = false;
    }
  }
  _onMarkerClick(id) {
    gtag('event', 'tracker', {
      action: 'click',
      label: 'marker'
    });
    if (this.width <= 600) {
      return;
    }
    const cand = this._dataManager.stop(id);
    if (!cand) {
      return;
    } else if (this.stop === cand) {
      this._focusOnSanta = true;
      return;
    }
    this._focusOnSanta = false;
    this._temporaryDestination = cand;
    this._setLocation(this._temporaryDestination.location, 2);
  }
  get details() {
    return this._details;
  }
  get stop() {
    if (this._details === null) {
      return null;
    }
    return this._dataManager.stop(this._details.visibleTo);
  }
  async prepareMaps() {
    const userLocation = Promise.resolve().then(async () => {
      const r = await fetch('https://santa-api.appspot.com/info?client=web');
      const data = await r.json();
      const raw = data.location.split(',');
      return {
        lat: +raw[0],
        lng: +raw[1]
      };
    });
    await load();
    this._map = new google.maps.Map(this._mapNode, {
      center: northpoleLocation,
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      backgroundColor: '#8ee0dd',
      styles: mapstyles,
      scrollwheel: false
    });
    this._santaOverlay = elementMapsOverlay();
    this._santaOverlay.setMap(this._map);
    this._santaOverlay.container.append(this._santaNode);
    this._santaNode.addEventListener('click', () => this._focusOnSanta = true);
    this._santaOverlay.position = new google.maps.LatLng(northpoleLocation.lat, northpoleLocation.lng);
    this._santaNode.heading = -90;
    const reset = reason => {
      if (!this._duringMapChange && !this._duringResize && this._focusOnSanta) {
        this._focusOnSanta = false;
        console.warn('removing focus', reason);
        gtag('event', 'tracker', {
          action: 'unfocusSanta',
          label: 'map',
          reason
        });
      }
    };
    this._map.addListener('center_changed', () => reset('move'));
    this._map.addListener('zoom_changed', () => reset('zoom'));
    this._dataManager = new DataManager([]);
    this._stopManager = new StopManager(null, this._dataManager);
    this._userLocation = await userLocation.catch(err => {
      console.error('failed to get user location', err);
      return null;
    });
    this._infoOffsetNode = document.createElement('span');
    this._infoOffsetNode.style.height = '100px';
    this._map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(this._infoOffsetNode);
  }
  render() {
    const destination = this._temporaryDestination || this._details && this._details.raw || null;
    return html`
<div class="outer">
  <div class="top">
    <h1>${"Sur les traces du p\xE8re\xA0No\xEBl"}</h1>
  </div>
  ${this._mapNode}
  <div class="overflow">
    <div class="info">
      <div class="explore">
        <div class="row">
          <modvil-arrow dir="down" target="village">${"Explorer"}</modvil-arrow>
        </div>
      </div>
      <modvil-tracker-feed .stops=${this._stops}></modvil-tracker-feed>
      <modvil-tracker-stats .details=${this._details} .arrivalTime=${this._closestArrival - this.now}></modvil-tracker-stats>
      <modvil-tracker-photos .destination=${destination}></modvil-tracker-photos>
    </div>
  </div>
  <div class="buttons">
    <modvil-tracker-mailbox .destinations=${this.destinations} .stops=${this._stops}></modvil-tracker-mailbox>
    <santa-button color="green" class=${this._focusOnSanta ? 'gone' : ''} @click=${this._onFocusSantaClick}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.22 139.5"><defs><style>.cls-1,.cls-3{fill:#fff;}.cls-1,.cls-4{stroke:#f9f9f9;stroke-miterlimit:10;}.cls-2{fill:#e53935;}.cls-4{fill:none;}</style></defs><title>hat_santa</title><g id="Layer_2" data-name="Layer 2"><g id="ART"><path class="cls-1" d="M55.9,28.21A27.7,27.7,0,1,1,28.21.5,27.69,27.69,0,0,1,55.9,28.21Z"/><path class="cls-2" d="M68.45,28.2l-1,0V139H242.87C242.87,77.8,164.78,28.2,68.45,28.2Z"/><rect class="cls-3" x="44.36" y="83.6" width="212.36" height="55.4" rx="16.37" ry="16.37"/><rect class="cls-4" x="44.36" y="83.6" width="212.36" height="55.4" rx="16.37" ry="16.37"/></g></g></svg>
    </santa-button>
  </div>
  <div id="top-divider"></div>
</div>
`;
  }
  firstUpdated() {
    this._infoNode = this.renderRoot.querySelector('.info') || this._infoOffsetNode;
    this._photosNode = this.renderRoot.querySelector('modvil-tracker-photos') || this._photosNode;
  }
  _onFocusSantaClick() {
    this._focusOnSanta = true;
    gtag('event', 'tracker', {
      action: 'click',
      label: 'focusSanta'
    });
  }
}
customElements.define('modvil-tracker', ModvilTrackerElement);
const villageLoadSounds = mobileAndTabletCheck() ? 'village_load_mobile_sounds' : 'village_load_sounds';
sceneApi.preload.sounds(villageLoadSounds);
sceneApi.preload.sounds('generic_load_sounds');
sceneApi.config({
  scroll: true,
  subscribe: true,
  sound: ['music_start_village', 'village_start']
});
sceneApi.preload.images('img/family-icon.png', 'img/ornament.svg', 'img/village/1.svg', 'img/village/2.svg', 'img/village/3.svg', 'img/village/4.svg', 'img/village/divider.svg');
const villageElement = document.getElementById('village');
const androidModuleTemplate = document.getElementById('android-module');
const insertAndroidCards = () => {
  if (androidModuleTemplate.parentNode) {
    const node = androidModuleTemplate.content.cloneNode(true);
    androidModuleTemplate.remove();
    const main = document.querySelector('main');
    main.insertBefore(node, villageElement.nextElementSibling);
  }
};
let featuredRoute = '';
let playRoute = '';
const mainElement = document.querySelector('main');
const trackerElement = document.createElement('modvil-tracker');
const loudCardElement = document.querySelector('santa-card.loud');
const destinationsCache = new DestinationsCache(destinations => {
  trackerElement.destinations = destinations;
});
if (window.top == window) {
  mainElement.prepend(trackerElement);
}
const featuredAssets = 'boatload buildandbolt codeboogie codelab elfmaker elfski holidayslopes glider gumball jamband jetpack mercator penguindash presentbounce santascanvas santaselfie seasonofgiving snowball snowbox snowflake traditions translations wrapbattle'.split(/\s+/g);
const fallbackFeaturedImageSrc = featuredImage.src;
sceneApi.addEventListener('data', ev => {
  const payload = ev.detail;
  const {
    showTracker,
    trackerFlags,
    trackerOffset
  } = payload;
  if (showTracker || showTracker !== false && trackerFlags.showTracker) {
    if (trackerElement.parentNode !== mainElement) {
      mainElement.prepend(trackerElement);
      sceneApi.preload.wait(trackerElement.updateComplete);
    }
  } else {
    trackerElement.remove();
  }
  trackerElement.routeJitter = trackerFlags.routeJitter;
  trackerElement.trackerOffset = trackerOffset || 0;
  loudCardElement.hidden = !payload.loudCard;
  loudCardElement.scene = payload.loudCard || null;
  destinationsCache.routeUrl = trackerFlags.routeUrl;
  if (payload.android) {
    insertAndroidCards();
  }
  const featured = payload.featured;
  if (featured in scenes) {
    featuredButton.disabled = false;
    featuredButton.style.background = scenesWithColor[featured] || null;
    featuredRoute = featured;
    featuredLabel.textContent = scenes[featured];
    if (featuredAssets.indexOf(featured) !== -1) {
      featuredImage.src = "/ivanguys-web/nochepolar/st/v2026/img/featured/" + featured + '.svg';
    } else {
      featuredImage.src = fallbackFeaturedImageSrc;
    }
  } else {
    featuredButton.disabled = true;
    featuredRoute = '';
  }
  playRoute = payload.play || '';
  Array.from(document.querySelectorAll('santa-card')).forEach(card => {
    const detail = payload.routes[card.id] || {
      video: false,
      locked: undefined
    };
    card.locked = detail.locked;
  });
});
function ratioForElement(el) {
  const se = document.scrollingElement;
  const topScroll = se.scrollTop;
  const effectiveStart = Math.max(0, el.offsetTop - window.innerHeight);
  const effectiveEnd = Math.min(se.offsetHeight - window.innerHeight, el.offsetTop + el.offsetHeight);
  const ratio = (topScroll - effectiveStart) / (effectiveEnd - effectiveStart);
  if (ratio <= 0.0) {
    return 0.0;
  } else if (ratio >= 1.0) {
    return 1.0;
  }
  return (Math.sin((ratio - 0.5) * Math.PI) + 1) * 0.5;
}
const updateModuleSoundRatio = function () {
  const previous = {};
  return (id, ratio) => {
    ratio = ratio || 0;
    if ((previous[id] || 0) === ratio) {
      return;
    }
    previous[id] = ratio;
    sceneApi.play('village_scroll', id, ratio);
  };
}();
async function prepareModules() {
  const main = document.querySelector('main');
  installAdjustHandler(resized => {
    let mode = '';
    if (window.innerWidth <= 414) {
      mode = 'mobile';
    } else if (window.innerWidth <= 768) {
      mode = 'small';
    }
    let visible = undefined;
    const rootMargin = 24;
    const se = document.scrollingElement;
    const windowRangeLow = se.scrollTop - rootMargin;
    const windowRangeHigh = se.scrollTop + window.innerHeight + rootMargin;
    const isMobileOrTablet = mobileAndTabletCheck();
    const topRatio = ratioForElement(villageElement);
    if (!isMobileOrTablet) {
      updateModuleSoundRatio('top', topRatio);
    }
    villageElement.active = topRatio < 1;
    const modules = Array.from(main.children).filter(m => m.localName === 'modvil-module');
    modules.forEach(m => {
      if (visible !== false) {
        if (m.offsetTop >= windowRangeHigh) {
          visible = false;
        }
      }
      if (visible === undefined) {
        if (m.offsetTop + m.offsetHeight >= windowRangeLow) {
          visible = true;
        }
      }
      const ratio = visible ? ratioForElement(m) : null;
      if (ratio === null) {
        m.ratio = null;
      } else if (!mode) {
        m.ratio = ratio;
      } else {
        m.ratio = 0.5;
      }
      m.mode = mode;
      const effectiveVisible = visible || false;
      if (m.load !== effectiveVisible) {
        m.resize();
        m.load = effectiveVisible;
      } else {
        resized && m.resize();
      }
      if (!isMobileOrTablet) {
        updateModuleSoundRatio(m.id, ratio);
      }
    });
  });
  if (!mobileAndTabletCheck()) {
    main.addEventListener('anim', e => {
      const scene = e.target.id;
      const {
        index,
        currentTime
      } = e.detail;
      checkAndPlaySound(scene, index, currentTime);
    });
  }
}
function checkAndPlaySound(scene, index, time) {
  if (animationSoundTriggers[scene] && animationSoundTriggers[scene][index]) {
    const sounds = animationSoundTriggers[scene][index];
    for (let i = 0; i < sounds.length; i++) {
      if (time > sounds[i].time && time < sounds[i].time + 5 && performance.now() - sounds[i].played > 1000) {
        sceneApi.play(sounds[i].sound, time);
        sounds[i].played = performance.now();
      }
    }
  }
}
sceneApi.preload.wait(prepareModules());
const configureActionButton = (button, callback) => {
  button.addEventListener('click', ev => {
    button.classList.add('active');
    callback();
  });
  button.addEventListener('mousedown', () => {
    sceneApi.play('generic_button_click');
  });
  button.addEventListener('mouseenter', () => {
    sceneApi.play('generic_button_over');
  });
  button.addEventListener('touchdown', () => {
    sceneApi.play('generic_button_click');
  });
};
configureActionButton(document.getElementById('play'), () => {
  gtag('event', 'village', {
    action: 'click',
    label: 'play-round'
  });
  sceneApi.go(playRoute);
});
configureActionButton(document.getElementById('featuredButton'), () => {
  gtag('event', 'village', {
    action: 'click',
    label: 'featured'
  });
  sceneApi.go(featuredRoute);
});
configureActionButton(document.getElementById('familyguide'), () => {
  gtag('event', 'village', {
    action: 'click',
    label: 'familyguide'
  });
  sceneApi.go('familyguide');
});
sceneApi.ready(async () => {
  function scrollToHash() {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.substr(1));
      el && el.scrollIntoView({
        block: 'center',
        behavior: 'auto'
      });
    }
  }
  window.addEventListener('hashchange', scrollToHash);
  scrollToHash();
  window.dispatchEvent(new CustomEvent('resize'));
  trackerElement.focusOnSanta();
  sceneApi.focusOnMenu();
});