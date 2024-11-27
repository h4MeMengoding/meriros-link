import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Custom404() {
  const [seconds, setSeconds] = useState(4); // Inisialisasi dengan 4 detik
  const [redirecting, setRedirecting] = useState(false); // State untuk memulai pengalihan

  useEffect(() => {
    if (seconds > 0) {
      // Setiap detik, kurangi nilai seconds
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer); // Bersihkan timeout ketika komponen dibersihkan
    } else {
      // Setelah countdown selesai, set redirecting menjadi true
      setRedirecting(true);
      // Tunggu 1 detik sebelum melakukan redirect
      setTimeout(() => {
        // Coba membuka aplikasi YouTube dengan deep link
        const youtubeAppURL = "youtube://aYxkRVJSMBA?si=BxcJOjTCb8R7rFWc";
        const youtubeWebURL = "https://youtu.be/aYxkRVJSMBA?si=BxcJOjTCb8R7rFWc";

        // Cek apakah perangkat bisa membuka YouTube dengan deep link
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = youtubeAppURL;
          document.body.appendChild(iframe);
          
          // Setelah 2 detik, jika aplikasi tidak terbuka, buka YouTube di browser
          setTimeout(() => {
            window.location.href = youtubeWebURL;
          }, 2000); // Tunggu 2 detik untuk memastikan aplikasi YouTube tidak terbuka
        } else {
          // Buka YouTube di browser untuk desktop
          window.location.href = youtubeWebURL;
        }
      }, 1000); // Tunggu 1 detik sebelum redirect
    }
  }, [seconds]); // Hook ini akan dipanggil setiap kali nilai 'seconds' berubah

  return (
    <LinkFoot>
      <h4>
        {redirecting ? (
          <>REDIRECTING...</>
        ) : (
          <>REDIRECTING IN {seconds} SECOND{seconds !== 1 ? "S" : ""}</>
        )}
        <br />
        <p>{redirecting ? (
          <>ENJOY WATCHING!</>
        ) : (
          <>WAIT A MOMENT, I'LL DIRECT YOU TO YOUTUBE</>
        )}</p>
        <a href="/">Back to homepage</a>
      </h4>
    </LinkFoot>
  );
}

const LinkFoot = styled.div`
  h4 {
    font-size: 25px;
    margin: 0;
    padding: 0;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-weight: 500;
  }
  a {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.6;
  }
  p {
    color: ${({ theme }) => theme.text.secondary};
    padding-top: 10px;
    line-height: 1.2;
    letter-spacing: -0.2px;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      font-size: 12px;
    }
  }
`;
