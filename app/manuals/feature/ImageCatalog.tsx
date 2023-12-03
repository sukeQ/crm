"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { CompAIC } from "@/types/manuals";

type Item = {
  fieldId: string;
  addImage: {
    url: string;
    height: number;
    width: number;
  };
  layout: boolean;
};

export default function ImageCatalog({ images }: CompAIC) {
  const [imageA, setImageA] = useState<string>("");
  useEffect(() => {
    if (images[0]) {
      setImageA(images[0].addImage.url);
    }
  }, []);

  const item = {
    fieldId: "addImages",
    addImage: {
      url: "https://images.microcms-assets.io/assets/c5513a7d5a93435698ee67ad03bf8f87/b1392007112b42f7ab9b5ea5ba1fc78f/ImMoc.png",
      height: 2167,
      width: 1500,
    },
  };
  function padArrayToSix(array: any) {
    const maxLength = 5;
    const currentLength = array.length;

    if (currentLength < maxLength) {
      const diff = maxLength - currentLength;
      for (let i = 0; i < diff; i++) {
        array.push(item); // ここで追加する要素の初期値をnullとしていますが、任意の値に変更できます
      }
    }
    return array;
  }

  // // 使用例
  images = padArrayToSix(images);
  // console.log(paddedArray); // 出力: [1, 2, 3, 4, null, null]

  return (
    <>
      <div className="grid lg:grid-cols-4 gap-2">
        <div className="cols-span-2 lg:grid-cols-1 gap-2">
          {images[0] &&
            images[0].addImage &&
            images.map((image, index) => (
              <figure className="relative w-32 h-44 mb-2" key={index}>
                <Image
                  src={image.addImage.url}
                  alt={image.addImage.url}
                  fill
                  onClick={() => setImageA(image.addImage.url)}
                  style={{ objectFit: "contain" }}
                  quality={20}
                />
              </figure>
            ))}
        </div>
        <figure className="relative top-0 col-span-3 w-full h-100vp sm:h-full lg:h-full">
          <Image
            src={imageA}
            alt={imageA}
            fill
            style={{ objectFit: "contain" }}
            quality={70}
          />
        </figure>
      </div>

      <span className="mt-3 block text-sm text-center text-gray-500">
        {/* {images && images.addImage[0].height} */}
      </span>
    </>
  );
}
