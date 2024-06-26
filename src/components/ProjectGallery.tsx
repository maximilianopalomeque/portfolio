"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import AOSComponent from "./AOS";

//define project type
export default function ProjectGallery({ images }: { images: any }) {
  return (
    <PhotoProvider photoClosable>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
        {images.map((image: any, index: number) => {
          return (
            <AOSComponent key={image.src} delay={index * 100}>
              <div key={image.src} className="h-[150px] w-auto">
                <PhotoView src={image.src}>
                  <img
                    src={image.src}
                    alt="project photo"
                    className="rounded-md xl:hover:cursor-pointer h-full w-full object-cover drop-shadow-md xl:hover:scale-105 transition-all "
                  />
                </PhotoView>
              </div>
            </AOSComponent>
          );
        })}
      </div>
    </PhotoProvider>
  );
}
