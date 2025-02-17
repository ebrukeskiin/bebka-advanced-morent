import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Harita için stil ve boyut ayarları
const mapContainerStyle = {
  width: "486px",  // Width 486px olarak ayarlandı
  height: "276px", // Height 272px olarak ayarlandı
};

// Varsayılan konum (örneğin İstanbul)
const defaultCenter = {
  lat: 41.0082, // Enlem
  lng: 28.9784, // Boylam
};

// Snazzy Maps'ten alınan Retro teması
const mapStyles = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
];

const GPSMap = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Maps API yüklenme durumu
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY, // .env dosyasından API key al
  });

  // Kullanıcının GPS konumunu al
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Konum alınamadı:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  if (loadError) {
    return <p>Harita yüklenirken bir hata oluştu.</p>;
  }

  if (!isLoaded) {
    return <p>Harita yükleniyor...</p>;
  }

  if (loading) {
    return <p>Kullanıcının konumu yükleniyor...</p>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={currentPosition || defaultCenter}
        zoom={14} // Yakınlaştırma seviyesi
        options={{
          styles: mapStyles, // Harita teması buraya ekleniyor
          disableDefaultUI: true, // Varsayılan Google Maps UI elemanlarını kaldırmak için
        }}
      >
        {currentPosition && <Marker position={currentPosition} />}
      </GoogleMap>
    </div>
  );
};

export default GPSMap;
