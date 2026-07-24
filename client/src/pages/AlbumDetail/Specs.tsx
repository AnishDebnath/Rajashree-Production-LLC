import React from 'react';
import { Camera, MapPin, Calendar, Briefcase, Wrench, Eye } from 'lucide-react';
import { Album } from '../../data/albums';

interface SpecsProps {
  album: Album;
}

export default function Specs({ album }: SpecsProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 mb-16 sm:mb-20">
      <div className="space-y-4">
        {/* Single-Column Specification Details */}
        <div className="bg-neutral-950/60 border border-white/5 rounded-3xl">
          <div className="flex flex-col">

            {/* Row 1: Project Type */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-3 text-neutral-400">
                <Briefcase className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm sm:text-base text-neutral-300">Project Type</span>
              </div>
              <span className="font-sans font-semibold text-neutral-100 text-right pl-4 text-sm sm:text-base">
                {album.projectType}
              </span>
            </div>

            {/* Row 2: Camera */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-white/5">
              <div className="flex items-center gap-3 text-neutral-400">
                <Camera className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm sm:text-base text-neutral-300">Camera</span>
              </div>
              <span className="font-sans font-semibold text-neutral-100 text-right pl-4 text-sm sm:text-base">
                {album.camera}
              </span>
            </div>

            {/* Row 3: Lenses */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-white/5">
              <div className="flex items-center gap-3 text-neutral-400">
                <Eye className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm sm:text-base text-neutral-300">Lenses</span>
              </div>
              <span className="font-sans font-semibold text-neutral-100 text-right pl-4 text-sm sm:text-base">
                {album.lenses}
              </span>
            </div>

            {/* Row 4: Location */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-white/5">
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm sm:text-base text-neutral-300">Location</span>
              </div>
              <span className="font-sans font-semibold text-neutral-100 text-right pl-4 text-sm sm:text-base">
                {album.location}
              </span>
            </div>

            {/* Row 5: Other Equipment */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-white/5">
              <div className="flex items-center gap-3 text-neutral-400">
                <Wrench className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm sm:text-base text-neutral-300">Other Equipment</span>
              </div>
              <span className="font-sans font-semibold text-neutral-100 text-right pl-4 text-sm sm:text-base">
                {album.otherEquipment}
              </span>
            </div>

            {/* Row 6: Year */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex items-center gap-3 text-neutral-400">
                <Calendar className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm sm:text-base text-neutral-300">Year</span>
              </div>
              <span className="font-sans font-semibold text-neutral-100 text-right pl-4 text-sm sm:text-base">
                {album.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}