export interface StockImageItem {
  src: string;
  name: string;
  category: 'real' | 'catalog' | 'gallery' | 'general';
}

export const EXISTING_IMAGE_LIBRARY: StockImageItem[] = [
  // Approved Real Photography
  { src: '/images/lone-wolf/hero_tile_top.jpg', name: 'Wayne Standing with Dumpsters (Hero Top Tile)', category: 'real' },
  { src: '/images/lone-wolf/hero_tile_bottom.jpg', name: 'Wide Fleet & Property Photo - IMG_1287 (Hero Bottom Tile)', category: 'real' },
  { src: '/images/lone-wolf/IMG_1287.jpeg', name: 'Raw Fleet & Property Photo (IMG_1287)', category: 'real' },

  // Approved Hero & Core Identity Set
  { src: '/images/lone-wolf/lone_wolf_hero_top.png', name: 'Approved Main Hero - Truck & Dumpster', category: 'real' },
  { src: '/images/lone-wolf/lone_wolf_hero_residential.png', name: 'Approved Residential Hero - Driveway Container', category: 'real' },
  { src: '/images/lone-wolf/lone_wolf_hero_construction.png', name: 'Approved Contractor Hero - Construction Job Site', category: 'real' },
  { src: '/images/lone-wolf/lone_wolf_hero_debris.png', name: 'Approved Cleanout & Junk Hero - Debris Container', category: 'real' },

  // Real Photography
  { src: '/images/lone-wolf/real/hero_main.jpg', name: 'Hero Main - Roll-Off Fleet', category: 'real' },
  { src: '/images/lone-wolf/real/hero_fleet_environment.jpg', name: 'Fleet Environment Showcase', category: 'real' },
  { src: '/images/lone-wolf/real/about_owner_photo.jpg', name: 'Wolf Ridge - Fleet & Equipment Photo', category: 'real' },
  { src: '/images/lone-wolf/real/commercial_environment_showcase.jpg', name: 'Commercial Industrial Showcase', category: 'real' },
  { src: '/images/lone-wolf/real/contractor_environment_showcase.jpg', name: 'Contractor Job Site Showcase', category: 'real' },
  { src: '/images/lone-wolf/real/residential_environment_showcase.jpg', name: 'Residential Driveway Placement', category: 'real' },
  { src: '/images/lone-wolf/real/dumpster_15_environment.jpg', name: '15 Yard Dumpster Environment', category: 'real' },
  { src: '/images/lone-wolf/real/dumpster_20_environment.jpg', name: '20 Yard Dumpster Environment', category: 'real' },
  { src: '/images/lone-wolf/real/dumpster_25_environment.jpg', name: '25 Yard Dumpster Environment', category: 'real' },
  { src: '/images/lone-wolf/real/junk_removal_environment.jpg', name: 'Junk Removal Team Debris Loading', category: 'real' },
  { src: '/images/lone-wolf/real/commercial_full_site.jpg', name: 'Commercial Full Site View', category: 'real' },
  { src: '/images/lone-wolf/real/commercial_wide_facility.jpg', name: 'Commercial Wide Facility View', category: 'real' },
  { src: '/images/lone-wolf/real/contractor_jobsite_showcase.jpg', name: 'Contractor Construction Job Site', category: 'real' },
  { src: '/images/lone-wolf/real/residential_landscape_full.jpg', name: 'Suburban Residential Setting', category: 'real' },
  { src: '/images/lone-wolf/real/real_dumpster_6082.jpg', name: 'Roll-Off Container Job #6082', category: 'real' },
  { src: '/images/lone-wolf/real/real_dumpster_6147.jpg', name: 'Roll-Off Container Job #6147', category: 'real' },
  { src: '/images/lone-wolf/real/real_dumpster_6570.jpg', name: 'Roll-Off Container Job #6570', category: 'real' },
  { src: '/images/lone-wolf/real/real_dumpster_6594.jpg', name: 'Roll-Off Container Job #6594', category: 'real' },
  { src: '/images/lone-wolf/real/real_dumpster_7047.jpg', name: 'Roll-Off Container Job #7047', category: 'real' },

  // General & Equipment
  { src: '/images/lone-wolf/dumpster-15.jpeg', name: '15 Yard Dumpster Clean Cutout', category: 'general' },
  { src: '/images/lone-wolf/dumpster-20.jpeg', name: '20 Yard Dumpster Clean Cutout', category: 'general' },
  { src: '/images/lone-wolf/dumpster-25.jpeg', name: '25 Yard Dumpster Clean Cutout', category: 'general' },
  { src: '/images/lone-wolf/junk-removal.jpeg', name: 'Junk Removal Crew & Equipment', category: 'general' },
  { src: '/images/lone-wolf/hero_dumpster_front.jpg', name: 'Dumpster Front Angle', category: 'general' },
  { src: '/images/lone-wolf/hero_dumpster_side.jpg', name: 'Dumpster Side Angle', category: 'general' },
  { src: '/images/lone-wolf/hero_placement.jpg', name: 'Driveway Placement Showcase', category: 'general' },

  // Gallery
  { src: '/images/lone-wolf/gallery/project-78.jpg', name: 'Completed Project Site #78', category: 'gallery' },
  { src: '/images/lone-wolf/gallery/24.png', name: 'Job Site Action Photo #24', category: 'gallery' },
  { src: '/images/lone-wolf/gallery/25.png', name: 'Job Site Action Photo #25', category: 'gallery' },
  { src: '/images/lone-wolf/gallery/26.png', name: 'Job Site Action Photo #26', category: 'gallery' },

  // Catalog
  { src: '/images/lone-wolf/catalog/commercial_heic.jpg', name: 'Catalog Commercial Container', category: 'catalog' },
  { src: '/images/lone-wolf/catalog/contractor__heic.jpg', name: 'Catalog Contractor Container', category: 'catalog' },
  { src: '/images/lone-wolf/catalog/residential_heic.jpg', name: 'Catalog Residential Container', category: 'catalog' },
  { src: '/images/lone-wolf/catalog/hero_heic.jpg', name: 'Catalog Hero Container', category: 'catalog' }
];
