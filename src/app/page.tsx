import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-Outfit bg-base-300">
      <div className="card bg-neutral text-neutral-content-content max-w-[48rem]">
        <div className="card-body sm:flex-row p-[1rem] gap-[1rem] items-center sm:items-start">

          <div className="avatar absolute sm:relative -top-16 sm:-top-0">
            <div className="w-36 rounded-full sm:rounded ">
              <img src="https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/459584025_26667188076229613_5804961633655525451_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGm9HA0gsQyE_K7eaxPfzPbqr_Ifz_Q_yCqv8h_P9D_IDUuZ2DK42gk4Y6T6upIvRPA96HZuWYUUJiAazWJpoVt&_nc_ohc=KKu0QIJjZrIQ7kNvgF0xFOd&_nc_oc=AdhHkz_f4uCrsjicsw8sCdSXDAuhR4dgikH1T8_Lja2J78y6Q1bL9g_uXa0yJKFPTTU&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&_nc_gid=AFA-nSkxJ6i9pBtjq0RihSi&oh=00_AYD0KhHpECj4lmafbfjhj0BF6WyDdLcsn3SZ6RrEwre3Pw&oe=67B11995" />
            </div>
          </div>

          <div className="flex-col items-center sm:h-36">
            <div className="flex-col card-title font-Outfit leading-[1rem] px-6 pt-20 sm:pt-0">
              <div className="font-extrabold">Thanayos Siratranont</div>
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
