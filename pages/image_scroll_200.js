import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Herosection from '../components/herosection';
import HerosectionNew from '../components/herosectionNew';
import validPageNumbers from '../public/ct_id_valid_page_numbers.json';
import { URLListBuilder } from './contracts_list';
import { s3_root_dir } from './contracts_list';
import { s3_root_dir_unlabeled } from './contracts_list';

export default function Home() {
  let img_list = URLListBuilder(s3_root_dir, 'ct_200', validPageNumbers['ct_200']);
  let img_list_unlabeled = URLListBuilder(s3_root_dir_unlabeled, 'ct_200', validPageNumbers['ct_200']);
  // console.log(img_list)
  // console.log(img_list_unlabeled)
  // console.log("THIS")
  // console.log(img_list_unlabeled[0])

  let txt = ""

  for (let i = 0; i<=img_list.length; i++){
    txt += "<HerosectionNew unlabeledImages={[img_list[" + i + "]]} labeledImages={[img_list_unlabeled[" + i + "]]}/>"
  }


  return (
    <div>
      <Head>
        <title>Contract 200</title>
        <meta name="Contract 200" content="Generated by create next app" />
      </Head>

      <h1 className="text-center text-6xl  font-bold pb-10 " style={{marginTop: '1em'}}>
          Contract 1 <span className="text-indigo-600">Harpoon / AbbVie</span>
      </h1>

      {/* <HerosectionNew unlabeledImages={[img_list[0]]} labeledImages={[img_list_unlabeled[0]]}/>
      <HerosectionNew unlabeledImages={[img_list[1]]} labeledImages={[img_list_unlabeled[1]]}/> */}
      {/* <HerosectionNew unlabeledImages={img_list[1]} labeledImages={img_list_unlabeled[1]}/> */}

      <div>
        {img_list.map((image, index) => (
          <HerosectionNew
            key={index}
            unlabeledImages={[image]}
            labeledImages={[img_list_unlabeled[index]]}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
