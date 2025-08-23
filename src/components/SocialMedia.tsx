import { socialMedia } from '@/constants';
import { GlowingEffect } from './ui/glowing-effect';

const SocialMedia = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {
        socialMedia.map((info) => {
          const Icon = info.img; // récupérer le composant icône
          return (
            <a
              key={info.id}
              href={info.link}
              aria-label={`Lien vers ${info.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center 
                           backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 
                           bg-black-200 rounded-lg border dark:border-white-300 border-black-300"
            >
              <Icon size={20} className="text-black dark:text-white" aria-hidden={true} />
            </a>
          );
        })
      }
    </div>
  )
}

export default SocialMedia

export const Maps = ({ Effect }: { Effect: React.ElementType }) => (
  <div className="relative flex-1 rounded-2xl min-h-[400px] border p-1 md:rounded-3xl md:p-2 h-full ">
    <Effect />
    <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.36344943756707!2d4.1757677!3d36.7703407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dbbf4a6952c37%3A0x2b835c2825b0f6ae!2sCabinet%20de%20p%C3%A9diatre%20Dr.%20SERSOUR%20Epse.%20ARABI!5e0!3m2!1sfr!2sdz!4v1724240000000!5m2!1sfr!2sdz"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        title="Localisation du Cabinet de pédiatre Dr. Sersour Epse. Arabi à Ouaguenoun"
      />
    </div>
  </div>
)