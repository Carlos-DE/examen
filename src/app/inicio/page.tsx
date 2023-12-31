import React from "react";
import LazyMap from "@/components/Map.lazy";
import { notFound } from "next/navigation";
import { ImageForm } from "@/components/ImageForm";

export default async function Inicio() {
    const urlBase = process.env.NEXTAUTH_URL;

    const directionResponse = await fetch(`${urlBase}api/directions/65787cd49324c963057952d2`);
    if (directionResponse.status !== 200) {
        return <h1>Direction not found</h1>;
    }
    const direction = await directionResponse.json();

    const mapResponse = await fetch(`${urlBase}api/map/direction/${direction._id}`);
    if (mapResponse.status !== 200) {
        return <h1>Map not found</h1>;
    }
    const map = await mapResponse.json();

    const longitud = Number(map.lon);
    const latitud = Number(map.lat);

    return (
        <div>
            <h1>InicioPage</h1>
            <ImageForm></ImageForm>

            <p>Aqui tienes la dirección:</p>

            <div style={{height: "500px"}}>
                <LazyMap center={[longitud, latitud]} zoom={10}></LazyMap>
            </div>
        </div>
    );
}
