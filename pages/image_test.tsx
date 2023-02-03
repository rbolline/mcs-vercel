import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <h1>Seeing image</h1>
      <h2>
        <Link href="/test_gh_pages">Back to home</Link>
      </h2>
      <h2>
        <Link href="/contracts_list">Contract images page</Link>
      </h2>

      <div>
        <img
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="https://lh3.googleusercontent.com/4aIVkiBsOVEEGyVVp9YA1U11dhqfMDpZah7IXmkWDtwNbxHETH2hWUitzJZkrhVwyDA"
          //alt="Picture of Germany"
          width={350}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
      <div>
        <img
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="https://lh4.googleusercontent.com/W2tJUUbxwYjZM1Wwab40lk7TvCrzJ5ykaHiLjThEq1O5nPBZmr5uRjpbxmiXsttEhb8"
          //alt="Picture of Germany"
          width={350}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
      <div>
        <img
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="https://lh6.googleusercontent.com/TFdYHWvpyzdjfXY59duuwznZkSXd-SmhBy_FIGqVVJ9_tovJnWSzmjR_k_8rMM3b3hM"
          //alt="Picture of Germany"
          width={350}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
    </>
  );
}
/*
images = ["https://lh5.googleusercontent.com/Eagp90W4tmxupnVYl8eTwhEyGaHdInWJntnJINh0GbjghXKn3mSDlofW6JtusKhGHA4",
          "https://lh4.googleusercontent.com/W2tJUUbxwYjZM1Wwab40lk7TvCrzJ5ykaHiLjThEq1O5nPBZmr5uRjpbxmiXsttEhb8",
          "https://lh6.googleusercontent.com/TFdYHWvpyzdjfXY59duuwznZkSXd-SmhBy_FIGqVVJ9_tovJnWSzmjR_k_8rMM3b3hM",
          "https://lh4.googleusercontent.com/rMYz43NH18f23A-nuacQwXh6ClfRPUAYIY-BKwm1YrOaNyvDga8tXJJRMoDYu28Jkx0",
          "https://lh3.googleusercontent.com/4aIVkiBsOVEEGyVVp9YA1U11dhqfMDpZah7IXmkWDtwNbxHETH2hWUitzJZkrhVwyDA"
        ]
*/
