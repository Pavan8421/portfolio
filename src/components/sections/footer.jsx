"use client";

import { useEffect, useState } from "react";
import LocationIcon from "@/components/icons/location";
import CloudSunIcon from "@/components/icons/cloud-sun";
import SeikoWatchModal from "@/components/watch-modal";
import IconTelescopeTripod from "@/components/icons/telescope-tripod";

const VISIT_COUNTED_KEY = "pv_counted";
const VISIT_COUNT_KEY = "pv_count";

let visitorCountRequest = null;

function readCachedCount() {
  try {
    const cached = Number(localStorage.getItem(VISIT_COUNT_KEY));
    return Number.isFinite(cached) ? cached : null;
  } catch {
    return null;
  }
}

function rememberCount(count, increment) {
  const cached = readCachedCount();
  let next = count;
  if (cached != null) {
    next = Math.max(cached, count);
    // CounterAPI can return the pre-increment value while the write is buffered.
    if (increment && next === cached) next = cached + 1;
  }
  try {
    localStorage.setItem(VISIT_COUNT_KEY, String(next));
  } catch {
    // Ignore storage failures and still show the fetched count.
  }
  return next;
}

function loadVisitorCount() {
  if (visitorCountRequest) return visitorCountRequest;

  let increment = false;
  try {
    increment = sessionStorage.getItem(VISIT_COUNTED_KEY) !== "1";
    if (increment) sessionStorage.setItem(VISIT_COUNTED_KEY, "1");
  } catch {
    increment = false;
  }

  visitorCountRequest = fetch("/api/visitors", {
    method: increment ? "POST" : "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.count === null || data.count === undefined) return null;
      return rememberCount(Number(data.count), increment);
    })
    .catch(() => null);

  return visitorCountRequest;
}

const Footer = () => {
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [visitors, setVisitors] = useState(null);
  useEffect(() => {
    const tick = () => setTime(new Date());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let active = true;
    const cached = readCachedCount();
    if (cached !== null) {
      setVisitors(cached.toLocaleString());
    }

    loadVisitorCount().then((count) => {
      if (!active || count === null) return;
      setVisitors(count.toLocaleString());
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    fetch("/api/location")
      .then((res) => res.json())
      .then((data) => {
        const city = data.city || "";
        const country = data.country || "";
        if (city && country) {
          setLocation(`${city}, ${country}`);
        } else {
          setLocation(city || country || null);
        }
        if (data.weather) {
          setWeather(`${data.weather.temperature}${data.weather.unit}`);
        }
      })
      .catch(() => setLocation(null));
  }, []);

  const formattedDate = time
    ? time.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const formattedTime = time
    ? time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "";

  return (
    <footer className="mx-auto mb-24 w-full max-w-4xl px-6 md:mb-6 md:px-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 font-cera text-xs text-muted-foreground/60">
          {time && (
            <SeikoWatchModal>
              <button
                type="button"
                className="w-fit cursor-pointer text-left transition-colors hover:text-foreground focus:outline-none focus-visible:text-foreground"
                aria-label="Open Seiko analog watch"
              >
                {formattedDate} &middot; {formattedTime}
              </button>
            </SeikoWatchModal>
          )}
          {location && (
            <span className="flex items-center gap-1">
              <LocationIcon className="h-3 w-3" />
              {location}
              {weather && (
                <>
                  <span>&middot;</span>
                  <CloudSunIcon className="h-3 w-3" />
                  {weather}
                </>
              )}
            </span>
          )}
          {visitors !== null && (
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <IconTelescopeTripod className="h-3 w-3" />
                {visitors} visitors
              </span>
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Pavan Kumar Varanasi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
