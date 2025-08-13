// src/components/DebugGallery.tsx
import { asset } from '../lib/asset'

const IMAGES: { file: string; alt: string }[] = [
  { file: 'profile.png', alt: 'Profile' },
  { file: 'profile1.png', alt: 'Profile 1' },

  { file: 'hemispheres.png', alt: 'Hemispheres' },
  { file: 'hemispheres1.png', alt: 'Hemispheres 1' },
  { file: 'hemispheres2.png', alt: 'Hemispheres 2' },
  { file: 'hemispheres4.png', alt: 'Hemispheres 4' },
  { file: 'hemispheres5.png', alt: 'Hemispheres 5' },
  { file: 'hemispheres9.png', alt: 'Hemispheres 9' },
  { file: 'hemispheres10.png', alt: 'Hemispheres 10' },

  { file: 'omni1.png', alt: 'Omni 1' },
  { file: 'omni2.png', alt: 'Omni 2' },
  { file: 'omni3.png', alt: 'Omni 3' },
  { file: 'omni4.png', alt: 'Omni 4' },

  { file: 'sb1.png', alt: 'Service Blueprint 1' },
  { file: 'sb2.png', alt: 'Service Blueprint 2' },
  { file: 'sb3.png', alt: 'Service Blueprint 3' },
  { file: 'sb4.png', alt: 'Service Blueprint 4' },
  { file: 'sb5.png', alt: 'Service Blueprint 5' },
  { file: 'sb6.png', alt: 'Service Blueprint 6' },
  { file: 'sb7.png', alt: 'Service Blueprint 7' },

  { file: 'secondop1.png', alt: 'Second Opinion 1' },
  { file: 'secondop2.png', alt: 'Second Opinion 2' },
  { file: 'secondop6.png', alt: 'Second Opinion 6' },
  { file: 'secondop7.png', alt: 'Second Opinion 7' },
  { file: 'secondop8.png', alt: 'Second Opinion 8' },
  { file: 'secondop9.png', alt: 'Second Opinion 9' },

  { file: 'viubyhub1.png', alt: 'VIU by HUB 1' },
  { file: 'viubyhub2.png', alt: 'VIU by HUB 2' },
  { file: 'viubyhub3.png', alt: 'VIU by HUB 3' },
  { file: 'viubyhub4.png', alt: 'VIU by HUB 4' },
  { file: 'viubyhub5.png', alt: 'VIU by HUB 5' },
]

export default function DebugGallery() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-[#e6ecff]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-wide">Image Debug Gallery</h1>
          <p className="text-sm opacity-80">
            Files are in <code>public/</code> and rendered via <code>asset('file.png')</code> (uses import.meta.env.BASE_URL).
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IMAGES.map(({ file, alt }) => (
            <figure key={file} className="bg-black/30 rounded-lg p-3 shadow">
              <img
                src={asset(file)}
                alt={alt}
                className="block w-full h-auto rounded"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs opacity-80 break-all">
                {alt} — {file}
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  )
}
