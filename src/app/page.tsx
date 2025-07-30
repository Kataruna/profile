import Image from "next/image";
import { Icon } from '@iconify/react';

const profile = `https://www.dropbox.com/scl/fi/sa5519sbw95ngtx34jkz7/Profile.jpg?rlkey=e8ytpvwqmdp8rj6332pj99t2o&st=lnq5j431&raw=1`;

export default function Home() {
  const socialLinks = [
    { href: "mailto:thanayos.sira@gmail.com", icon: "ic:round-mail" },
    { href: "https://www.linkedin.com/in/thanayos-siratranont-7a952822a/", icon: "mdi:linkedin" },
    { href: "https://github.com/Kataruna", icon: "ri:github-fill" },
    { href: "https://x.com/Katarubun", icon: "meteor-icons:x-alt" },
    { href: "https://line.me/ti/p/TlNlXZIRfc", icon: "simple-icons:line" },
    { href: "https://www.instagram.com/kataruchibun?igsh=Nnh4YXMwY2JtNm1k", icon: "teenyicons:instagram-solid" },
    { href: "https://discord.com/users/178869268148912128", icon: "ic:round-discord" },
    { href: "https://www.facebook.com/tutor.siratranont/", icon:"mdi:facebook"},
  ];

  return (
    <div className="w-screen h-screen flex justify-center items-center font-Outfit bg-light dark:bg-dark">
      <div className="card border-light-content border-2 bg-light-popout text-light-content dark:bg-dark-popout dark:text-dark-content max-w-3xl">
        <div className="card-body landscape:sm:flex-row p-4 gap-4 items-center">

          <div className="avatar absolute -top-16 sm:left-6">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 dark:border-0 border-light-content">
              <Image
                src={profile}
                alt="Profile"
                layout="responsive"
                width={512}
                height={512}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex-col items-center sm:items-start sm:pl-52 sm:py-2">
            <div className="flex-col card-title font-Outfit leading-4 px-6 pt-20 text-center sm:pt-0 sm:text-left sm:items-start">
              <div className="font-extrabold text-[1.4rem] sm:text">Thanayos Siratranont</div>
              <div className="font-normal text-base flex flex-row gap-1">
                <div >Programmer</div>
                <div className="translate-y-[0.12rem] -translate-x-[0.02rem]">•</div>
                <div >UX/UI Designer</div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="flex flex-row justify-center">
              <div className="carousel gap-5 max-w-[12.5rem]">
                {...socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carousel-item"
                  >
                    <Icon icon={link.icon} className="text-[1.5rem]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}