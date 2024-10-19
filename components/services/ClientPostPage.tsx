"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";

interface ClientPostPageProps {
  servicesByCategory: Record<string, any[]>;
  categories: string[];
}

export default function ClientPostPage({
  servicesByCategory,
  categories,
}: ClientPostPageProps) {
  const [activeCategory, setActiveCategory] = useState(
    categories.length > 1 ? "All" : categories[0]
  );

  const showTabs = categories.length > 1;

  return (
    <>
      {showTabs && (
        <div className="mb-8 ">
          <div className="flex space-x-4 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-semibold ${
                  activeCategory === category
                    ? "bg-slate-700 text-white"
                    : "bg-slate-200 text-slate-700"
                } rounded-lg shadow-md`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Services Section */}
      <div className="prose relative mx-auto w-full">
        {servicesByCategory[activeCategory].map((service) => (
          <div
            key={service.id}
            className="my-6 p-4 border rounded-lg border-slate-200 dark:border-slate-700 shadow-md flex items-center hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out bg-white"
          >
            <div className="sticky w-20 h-20 mr-4 flex-shrink-0 flex justify-center items-center">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill={true}
                className="object-cover rounded-lg relative my-0"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-base font-semibold mb-2">{service.title}</h2>
              {service.description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 text-justify ml-1">
                  {service.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
