'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Star, ShieldCheck, MapPin } from 'lucide-react';
import { siteSettings } from '@/data/siteSettings';
import { trackBookOnlineClick, trackPhoneClick } from '@/lib/tracking';
import { getQuoteUrl } from '@/lib/ctaHelper';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TrustItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  headlineWhite: string;
  headlineRed: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  heroTopImageSrc?: string;
  heroTopImageAlt?: string;
  heroBottomImageSrc?: string;
  heroBottomImageAlt?: string;
  showRating?: boolean;
  trustItems?: TrustItem[];
  badgeText?: string;
  imageObjectPosition?: string;
  overlayGradient?: string;
  isHomepage?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumbs,
  headlineWhite,
  headlineRed,
  description,
  imageSrc = '/images/lone-wolf/lone_wolf_hero_top.png',
  imageAlt = 'Wolf Ridge Dumpsters roll-off dumpster serving the Dallas-Fort Worth area',
  heroTopImageSrc = '/images/lone-wolf/hero_tile_top.jpg',
  heroTopImageAlt = 'Wayne standing with roll-off dumpsters in Colleyville yard',
  heroBottomImageSrc = '/images/lone-wolf/hero_tile_bottom.jpg',
  heroBottomImageAlt = 'Wide roll-off dumpster fleet and property ready for delivery across DFW',
  showRating = false,
  trustItems,
  badgeText,
  imageObjectPosition = 'center center',
  overlayGradient,
  isHomepage,
}) => {
  const pathname = usePathname();
  const isHome = isHomepage || pathname === '/';
  const quoteUrl = getQuoteUrl(pathname);
  const hasImage = imageSrc && imageSrc !== 'none';
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    setImageLoaded(false);
  }, [imageSrc, heroTopImageSrc, heroBottomImageSrc]);

  return (
    <section
      className={`page-hero-container ${isHome ? 'homepage-hero-root' : 'secondary-hero-root'}`}
      style={{
        backgroundColor: '#07090e',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #1e293b',
        padding: isHome ? '40px 0 44px 0' : '36px 0 40px 0',
      }}
      aria-label="Hero Section"
    >

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        
        {/* 1. Breadcrumbs Trail (Secondary Pages) */}
        {!isHome && breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            style={{
              marginBottom: '16px',
              fontSize: '0.82rem',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span style={{ color: '#475569' }}>/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    className="hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* 2. Main Hero Content Layout */}
        <div
          className="hero-grid-wrapper"
          style={{
            display: 'grid',
            gridTemplateColumns: isHome
              ? 'minmax(320px, 600px) 1fr'
              : hasImage
                ? 'repeat(auto-fit, minmax(320px, 1fr))'
                : '1fr',
            gap: isHome ? '40px' : '32px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Headlines & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 3 }}>
            
            {/* Optional Badge */}
            {badgeText && (
              <div
                className="hero-badge-pill"
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(220, 38, 38, 0.14)',
                  border: '1px solid rgba(220, 38, 38, 0.45)',
                  color: 'var(--accent-red)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  padding: '5px 14px',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ShieldCheck size={14} />
                <span>{badgeText}</span>
              </div>
            )}

            {/* Main Page H1 Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: isHome
                  ? 'clamp(2.3rem, 4.4vw, 3.8rem)'
                  : 'clamp(2.1rem, 4vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.06,
                textTransform: 'uppercase',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ color: '#ffffff', display: 'block' }}>{headlineWhite}</span>{' '}
              <span style={{ color: 'var(--accent-red)', display: 'block' }}>{headlineRed}</span>
            </h1>

            {/* Sub-headline / Narrative Lead */}
            <p
              style={{
                fontSize: 'clamp(0.98rem, 1.8vw, 1.12rem)',
                color: '#cbd5e1',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '620px',
              }}
            >
              {description}
            </p>

            {/* Optional Google Rating Chip */}
            {showRating && (
              <div
                className="hero-rating-badge"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(30, 41, 59, 0.65)',
                  border: '1px solid #334155',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  width: 'fit-content',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#4285f4',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  G
                </span>
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>5.0</span>
                <div style={{ display: 'flex', gap: '2px', color: '#eab308' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <span style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>
                  5-Star Rated by DFW Customers
                </span>
              </div>
            )}

            {/* Dual Action Buttons */}
            <div
              className="hero-actions-row"
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginTop: '6px',
              }}
            >
              <Link
                href={quoteUrl}
                onClick={() => trackBookOnlineClick(isHome ? 'hero_home_primary' : 'hero_primary')}
                className="btn-glow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--accent-red)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.96rem',
                  textTransform: 'uppercase',
                  padding: '14px 24px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 16px rgba(220, 38, 38, 0.45)',
                  transition: 'all 0.15s ease',
                }}
              >
                <Calendar size={18} />
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div>GET A QUOTE</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 500, opacity: 0.9, textTransform: 'none' }}>
                    Fast, Free &amp; Easy
                  </div>
                </div>
              </Link>

              <a
                href={`tel:${siteSettings.contact.phoneRaw}`}
                onClick={() => trackPhoneClick(isHome ? 'hero_home_phone' : 'hero_secondary')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  color: '#ffffff',
                  border: '1px solid #334155',
                  fontWeight: 800,
                  fontSize: '0.96rem',
                  textTransform: 'uppercase',
                  padding: '14px 22px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'all 0.15s ease',
                }}
              >
                <Phone size={18} style={{ color: 'var(--accent-red)' }} />
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div>CALL OR TEXT</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#cbd5e1' }}>
                    {siteSettings.contact.phone}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Two Vertically Stacked Image Tiles on Homepage, or single frame on Secondary pages */}
          {isHome ? (
            <div
              className="homepage-two-tile-wrapper"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                width: '100%',
              }}
            >
              {/* Top Tile: Wolf Ridge Dumpster */}
              <div
                className="hero-tile-top"
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid #334155',
                  boxShadow: '0 12px 28px -6px rgba(0,0,0,0.75)',
                  aspectRatio: '16 / 7.8',
                  width: '100%',
                  backgroundColor: '#0a0d14',
                }}
              >
                <Image
                  src={heroTopImageSrc || '/images/lone-wolf/hero_tile_top.jpg'}
                  alt={heroTopImageAlt || 'Wayne standing with roll-off dumpsters in Colleyville yard'}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 680px"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Bottom Tile: Wide Fleet in Yard */}
              <div
                className="hero-tile-bottom"
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid #334155',
                  boxShadow: '0 12px 28px -6px rgba(0,0,0,0.75)',
                  aspectRatio: '16 / 7.8',
                  width: '100%',
                  backgroundColor: '#0a0d14',
                }}
              >
                <Image
                  src={heroBottomImageSrc || '/images/lone-wolf/hero_tile_bottom.jpg'}
                  alt={heroBottomImageAlt || 'Wide roll-off dumpster fleet and property ready for delivery across DFW'}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 680px"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          ) : (
            hasImage && (
              <div
                className="hero-image-frame secondary-hero-image-frame"
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #334155',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)',
                  aspectRatio: '16 / 10',
                  maxHeight: '400px',
                  width: '100%',
                  backgroundColor: '#0a0d14',
                }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 650px"
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    objectFit: 'cover',
                    objectPosition: imageObjectPosition,
                    opacity: imageLoaded ? 1 : 0.05,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            )
          )}
        </div>

        {/* 3. Optional Bottom Trust Feature Badges */}
        {trustItems && trustItems.length > 0 && (
          <div
            style={{
              marginTop: isHome ? '36px' : '32px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(51, 65, 85, 0.6)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {trustItems.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(220, 38, 38, 0.15)',
                    color: 'var(--accent-red)',
                    padding: '8px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.88rem', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff' }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 500 }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
