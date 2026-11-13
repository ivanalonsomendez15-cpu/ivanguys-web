import { s as sceneApi } from '../../_e310d67a.js';
import { l as load } from '../../_5c45a2b1.js';
import { m as mapstyles } from '../../_f66735ca.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    Traditions: function (a, b) {
      this.el_ = a;
      this.allTraditions_ = a.querySelector("#traditions-all");
      this.image_ = this.el_.querySelector("#tradition-img");
      this.currentId_ = "";
      this.markers_ = {};
      this.setup();
      this.map_ = new google.maps.Map(this.el_.querySelector("#traditions-map"), {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        disableDefaultUI: !0,
        scrollwheel: !1,
        draggable: !1,
        disableDoubleClickZoom: !0,
        backgroundColor: c.Traditions.WATER_COLOR_,
        styles: b,
        draggableCursor: "default"
      });
      this.markerBounds_ = new google.maps.LatLngBounds();
      this.addCountryMarkers_();
      window.addEventListener("resize", this.handleResize_.bind(this));
    }
  };
  c.Traditions.WATER_COLOR_ = "#f6efe2";
  c.Traditions.prototype.setup = function () {
    this.SMALL_PIN_ = {
      anchor: new google.maps.Point(12, 12),
      scaledSize: new google.maps.Size(540, 53),
      size: new google.maps.Size(54, 53),
      url: "img/pins_small_2x.png"
    };
    this.BIG_PIN_ = {
      anchor: new google.maps.Point(24, 24),
      scaledSize: new google.maps.Size(1080, 106),
      size: new google.maps.Size(108, 106),
      url: "img/pins_large_2x.png"
    };
    this.markerBounds_ = null;
  };
  c.Traditions.SMALL_PIN_OFFSET_ = 54;
  c.Traditions.BIG_PIN_OFFSET_ = 108;
  c.Traditions.NUM_PINS_ = 10;
  c.Traditions.prototype.prevCountry = function () {
    window.santaApp.fire("sound-trigger", "generic_button_click");
    const a = this.allTraditions_.querySelector(".tradition-active");
    this.show((a && a.previousElementSibling || this.allTraditions_.lastElementChild).getAttribute("data-id"));
  };
  c.Traditions.prototype.nextCountry = function () {
    window.santaApp.fire("sound-trigger", "generic_button_click");
    const a = this.allTraditions_.querySelector(".tradition-active");
    this.show((a && a.nextElementSibling || this.allTraditions_.firstElementChild).getAttribute("data-id"));
  };
  c.Traditions.prototype.addCountryMarkers_ = function () {
    c.Traditions.COUNTRIES_.forEach(function (a, b) {
      var d = b % c.Traditions.NUM_PINS_ * c.Traditions.SMALL_PIN_OFFSET_,
        f = {
          anchor: this.SMALL_PIN_.anchor,
          scaledSize: this.SMALL_PIN_.scaledSize,
          size: this.SMALL_PIN_.size,
          url: this.SMALL_PIN_.url,
          origin: new google.maps.Point(d, 0)
        },
        e = new google.maps.Marker({
          position: a.geometry.location,
          map: this.map_,
          icon: f
        });
      this.markerBounds_.extend(e.getPosition());
      d = b % c.Traditions.NUM_PINS_ * c.Traditions.BIG_PIN_OFFSET_;
      b = {
        anchor: this.BIG_PIN_.anchor,
        scaledSize: this.BIG_PIN_.scaledSize,
        size: this.BIG_PIN_.size,
        url: this.BIG_PIN_.url,
        origin: new google.maps.Point(d, 0)
      };
      this.markers_[a.country_key] = {
        marker: e,
        info: a,
        smallIcon: f,
        bigIcon: b
      };
      a = this.show.bind(this, a.country_key);
      google.maps.event.addListener(e, "click", a);
    }, this);
    this.map_.fitBounds(this.markerBounds_);
  };
  c.Traditions.prototype.handleResize_ = function () {
    if (this.currentId_) {
      this.verticalAlignText_();
      var a = this.markers_[this.currentId_],
        b = a.info.geometry.viewport;
      b = new google.maps.LatLngBounds(new google.maps.LatLng(b.southwest.lat, b.southwest.lng), new google.maps.LatLng(b.northeast.lat, b.northeast.lng));
      this.map_.fitBounds(this.padBounds_(b));
      a.info.zoom_limit && this.map_.getZoom() > a.info.zoom_limit && this.map_.setZoom(a.info.zoom_limit);
    }
  };
  c.Traditions.prototype.verticalAlignText_ = function () {
    const a = this.allTraditions_.querySelector(".tradition-active");
    if (a) {
      const b = a.getBoundingClientRect();
      a.style.marginTop = `${-b.height / 2}px`;
    }
  };
  c.Traditions.prototype.showWorld = function () {
    window.santaApp.fire("sound-trigger", "generic_button_click");
    this.image_.style.backgroundImage = "";
    this.image_.classList.remove("active");
    if (this.currentId_) {
      this.markers_[this.currentId_].marker.setIcon(this.markers_[this.currentId_].smallIcon);
      const a = this.getCountryEl_(this.currentId_);
      a && a.classList.remove("tradition-active");
    }
    this.currentId_ = "";
    this.map_.fitBounds(this.markerBounds_);
  };
  c.Traditions.prototype.show = function (a) {
    if (a !== this.currentId_) {
      var b = this.getCountryEl_(a);
      if (this.currentId_) {
        this.markers_[this.currentId_].marker.setIcon(this.markers_[this.currentId_].smallIcon);
        const a = this.getCountryEl_(this.currentId_);
        a && a.classList.remove("tradition-active");
      }
      a && b ? (this.currentId_ = a, b.classList.add("tradition-active"), this.verticalAlignText_(), this.image_.classList.add("active"), this.image_.style.backgroundImage = `url(img/country/${a}.png)`, this.markers_[a].marker.setIcon(this.markers_[this.currentId_].bigIcon), this.handleResize_()) : this.showWorld();
    }
  };
  c.Traditions.prototype.padBounds_ = function (a) {
    var b = a.toSpan().lng();
    b = new google.maps.LatLng(a.getSouthWest().lat(), a.getSouthWest().lng() - .3 * b);
    return (b = a.extend(b)) ? b : a;
  };
  c.Traditions.prototype.getCountryEl_ = function (a) {
    return this.allTraditions_.querySelector(`[data-id=${a}]`);
  };
  c.Traditions.COUNTRIES_ = [{
    country_key: "us",
    geometry: {
      location: {
        lat: 38.9,
        lng: -77
      },
      viewport: {
        northeast: {
          lat: 49.38,
          lng: -66.94
        },
        southwest: {
          lat: 25.82,
          lng: -124.39
        }
      }
    }
  }, {
    country_key: "mx",
    geometry: {
      location: {
        lat: 19.42,
        lng: -99.13
      },
      viewport: {
        northeast: {
          lat: 32.7187629,
          lng: -86.7105711
        },
        southwest: {
          lat: 14.5345485,
          lng: -118.3644301
        }
      }
    }
  }, {
    country_key: "gt",
    geometry: {
      location: {
        lat: 14.62,
        lng: -90.52
      },
      viewport: {
        northeast: {
          lat: 17.8157113,
          lng: -88.2256151
        },
        southwest: {
          lat: 13.7400214,
          lng: -92.2318358
        }
      }
    }
  }, {
    country_key: "ca",
    geometry: {
      location: {
        lat: 45.423,
        lng: -75.7
      },
      viewport: {
        northeast: {
          lat: 68,
          lng: -62
        },
        southwest: {
          lat: 48,
          lng: -128
        }
      }
    }
  }, {
    country_key: "ar",
    geometry: {
      location: {
        lat: -34.6,
        lng: -58.38
      },
      viewport: {
        northeast: {
          lat: -21.7808136,
          lng: -53.637481
        },
        southwest: {
          lat: -55.0577146,
          lng: -73.5603601
        }
      }
    }
  }, {
    country_key: "br",
    geometry: {
      location: {
        lat: -15.79,
        lng: -47.89
      },
      viewport: {
        northeast: {
          lat: 5.271602,
          lng: -32.3783765
        },
        southwest: {
          lat: -33.7517484,
          lng: -73.982817
        }
      }
    }
  }, {
    country_key: "is",
    geometry: {
      location: {
        lat: 64.134,
        lng: -21.89
      },
      viewport: {
        northeast: {
          lat: 66.5663182,
          lng: -13.4958154
        },
        southwest: {
          lat: 63.2961021,
          lng: -24.546524
        }
      }
    }
  }, {
    country_key: "uk",
    geometry: {
      location: {
        lat: 51.5,
        lng: -.11
      },
      viewport: {
        northeast: {
          lat: 60.856553,
          lng: 1.7627096
        },
        southwest: {
          lat: 49.8700191,
          lng: -8.6493573
        }
      }
    }
  }, {
    country_key: "gh",
    geometry: {
      location: {
        lat: 5.56,
        lng: -.18
      },
      viewport: {
        northeast: {
          lat: 11.1666675,
          lng: 1.1993625
        },
        southwest: {
          lat: 4.73887379,
          lng: -3.260786
        }
      }
    }
  }, {
    country_key: "fr",
    geometry: {
      location: {
        lat: 48.85,
        lng: 2.35
      },
      viewport: {
        northeast: {
          lat: 51.0891663,
          lng: 9.5597934
        },
        southwest: {
          lat: 41.3423276,
          lng: -5.140402
        }
      }
    }
  }, {
    country_key: "de",
    geometry: {
      location: {
        lat: 52.51,
        lng: 13.4
      },
      viewport: {
        northeast: {
          lat: 55.058347,
          lng: 15.0418961
        },
        southwest: {
          lat: 47.2701114,
          lng: 5.8663425
        }
      }
    }
  }, {
    country_key: "gr",
    geometry: {
      location: {
        lat: 37.98,
        lng: 23.72
      },
      viewport: {
        northeast: {
          lat: 41.804,
          lng: 26.806
        },
        southwest: {
          lat: 35.8534,
          lng: 19.4458
        }
      }
    }
  }, {
    country_key: "kg",
    geometry: {
      location: {
        lat: 42.875,
        lng: 74.59
      },
      viewport: {
        northeast: {
          lat: 43.2653569,
          lng: 80.2265592
        },
        southwest: {
          lat: 39.180254,
          lng: 69.250998
        }
      }
    }
  }, {
    country_key: "ru",
    geometry: {
      location: {
        lat: 55.74,
        lng: 37.62
      },
      viewport: {
        northeast: {
          lat: 73,
          lng: 74
        },
        southwest: {
          lat: 48,
          lng: 30
        }
      }
    }
  }, {
    country_key: "ph",
    geometry: {
      location: {
        lat: 14.59,
        lng: 120.98
      },
      viewport: {
        northeast: {
          lat: 19.574024,
          lng: 126.6043837
        },
        southwest: {
          lat: 4.61344429,
          lng: 116.7031626
        }
      }
    }
  }, {
    country_key: "au",
    geometry: {
      location: {
        lat: -35.28,
        lng: 149.12
      },
      viewport: {
        northeast: {
          lat: -9.22572229,
          lng: 153.6386739
        },
        southwest: {
          lat: -43.658327,
          lng: 112.9239721
        }
      }
    }
  }, {
    country_key: "nz",
    geometry: {
      location: {
        lat: -41.29,
        lng: 174.77
      },
      viewport: {
        northeast: {
          lat: -34.1295577,
          lng: 179.0625356
        },
        southwest: {
          lat: -47.76811,
          lng: 166.426136
        }
      }
    }
  }, {
    country_key: "fi",
    geometry: {
      location: {
        lat: 60.12,
        lng: 24.94
      },
      viewport: {
        northeast: {
          lat: 68.89,
          lng: 31.12
        },
        southwest: {
          lat: 59.38,
          lng: 20.62
        }
      }
    }
  }, {
    country_key: "kr",
    zoom_limit: 6,
    geometry: {
      location: {
        lat: 37.51,
        lng: 127.01
      },
      viewport: {
        northeast: {
          lat: 39.15,
          lng: 129.84
        },
        southwest: {
          lat: 34.02,
          lng: 122.1
        }
      }
    }
  }, {
    country_key: "lt",
    geometry: {
      location: {
        lat: 54.68,
        lng: 25.27
      },
      viewport: {
        northeast: {
          lat: 56.67,
          lng: 26.57
        },
        southwest: {
          lat: 53.66,
          lng: 20.06
        }
      }
    }
  }];
  c.Game = c.Traditions;
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('traditions_load_sounds');
sceneApi.preload.sounds('generic');
sceneApi.preload.images('img/pins_small.png', 'img/pins_small_2x.png', 'img/pins_large.png', 'img/pins_large_2x.png');
const all = Array.prototype.slice.call(document.getElementById('traditions-all'));
const icons = all.map(div => `img/country/${div.getAttribute('data-id')}.png`);
sceneApi.preload.images(...icons);
const mapsApi = load();
sceneApi.preload.wait(mapsApi);
const gamePromise = mapsApi.then(() => {
  return new Game(document.getElementById('module-traditions'), mapstyles);
});
sceneApi.config({
  sound: ['music_start_scene']
});
sceneApi.ready(async () => {
  const game = await gamePromise;
  document.getElementById('button-next').addEventListener('click', () => game.nextCountry());
  document.getElementById('button-prev').addEventListener('click', () => game.prevCountry());
  document.getElementById('button-world').addEventListener('click', () => game.showWorld());
  window.addEventListener('keydown', ev => {
    switch (ev.key) {
      case 'Left':
      case 'ArrowLeft':
        game.nextCountry();
        break;
      case 'Right':
      case 'ArrowRight':
        game.prevCountry();
        break;
      case ' ':
        game.showWorld();
        break;
      default:
        return;
    }
    ev.preventDefault();
  });
});