import Image from "next/image";
import { Icon } from '@iconify/react';

const profile = `https://www.dropbox.com/scl/fi/sa5519sbw95ngtx34jkz7/Profile.jpg?rlkey=e8ytpvwqmdp8rj6332pj99t2o&st=lnq5j431&raw=1`;

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-Outfit bg-light dark:bg-dark">
      <div className="card border-light-content border-2 bg-light-popout text-light-content dark:bg-dark-popout dark:text-dark-content max-w-[48rem]">
        <div className="card-body landscape:sm:flex-row p-[1rem] gap-[1rem] items-center">

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
            <div className="flex-col card-title font-Outfit leading-[1rem] px-6 pt-20 text-center sm:pt-0 sm:text-left sm:items-start">
              <div className="font-extrabold text-[1.4rem] sm:text">Thanayos Siratranont</div>
              <div className="font-normal text-base flex flex-row gap-1">
                <div >Programmer</div>
                <div className="translate-y-[0.12rem] -translate-x-[0.02rem]">•</div>
                <div >UX/UI Designer</div>
              </div>
            </div>
            
            <div className="divider"></div>

            <div className="flex flex-row justify-center gap-5">
              <a href="mailto:tuaa1bb2@gmail.com" target="_blank" rel="noopener noreferrer">
                <Icon icon="ic:round-mail" className="text-[1.5rem]" />
              </a>

              <a href="https://www.linkedin.com/in/thanayos-siratranont-7a952822a/" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:linkedin" className="text-[1.5rem]" />
              </a>

              <a href="https://github.com/Kataruna" target="_blank" rel="noopener noreferrer">
                <Icon icon="ri:github-fill" className="text-[1.5rem]" />
              </a>

              <a href="https://x.com/Katarubun" target="_blank" rel="noopener noreferrer">
                <Icon icon="meteor-icons:x-alt" className="text-[1.5rem]" />
              </a>

              <a href="https://line.me/ti/p/TlNlXZIRfc" target="_blank" rel="noopener noreferrer">
                <Icon icon="simple-icons:line" className="text-[1.5rem]" />
              </a>

              <a href="https://www.instagram.com/kataruchibun?igsh=Nnh4YXMwY2JtNm1k" target="_blank" rel="noopener noreferrer">
                <Icon icon="teenyicons:instagram-solid" className="text-[1.5rem]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}