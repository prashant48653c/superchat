"use client";
import { useGeolocation } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

export function ComponentWithGeolocation({setMapLink}) {
  const state = useGeolocation({
    maximumAge: 10000,
    enableHighAccuracy: true,
  });

  const [locationUrl, setLocationUrl] = useState("");

  useEffect(() => {
    if (state.latitude && state.longitude) {
      const mapUrl = `https://www.google.com/maps?q=${state.latitude},${state.longitude}`;
      setMapLink(mapUrl)
      setLocationUrl(mapUrl);
    }
  }, [state.latitude, state.longitude]);

  if (state.loading) {
    return <p>📡 Loading... (please allow location access)</p>;
  }

  if (state.error) {
    return <p>❌ Enable permissions to access your location.</p>;
  }

  return (
    <div className="p-4 absolute w-[20rem] h-[20rem] z-10 bg-black text-white flex justify-center items-center text-center">
      {locationUrl ? (
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-lg"
        >
          🌍 Open My Location in Google Maps
        </a>
      ) : (
        <p>⚠️ Location not available.</p>
      )}
    </div>
  );
}
