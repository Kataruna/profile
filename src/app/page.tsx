// import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-Outfit bg-light dark:bg-dark">
      <div className="card border-light-content border-2 bg-light-popout text-light-content dark:bg-dark-popout dark:text-dark-content max-w-[48rem]">
        <div className="card-body landscape:sm:flex-row p-[1rem] gap-[1rem] items-center">

          <div className="avatar absolute -top-16 sm:left-6">
            <div className="w-36 rounded-full sm:w-48 border-2 dark:border-0 border-light-content">
              <img src="https://cdn.discordapp.com/attachments/880737440619442206/1340711826777837699/FB_IMG_1739546412994.jpg?ex=67b35ab0&is=67b20930&hm=89157b28275bede468c32b796a3b0af44238b9ca6a00de0330404567b26ec871&" alt={"Profile"} />
            </div>
          </div>

          <div className="flex-col items-center sm:items-start sm:pl-52 sm:py-2">
            <div className="flex-col card-title font-Outfit leading-[1rem] px-6 pt-20 text-center sm:pt-0 sm:text-left sm:items-start">
              <div className="font-extrabold text-[1.4rem] sm:text">Thanayos Siratranont</div>
              <div className="font-normal text-base">UX/UI Designer | Programmer</div>
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
