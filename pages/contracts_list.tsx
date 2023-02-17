import Link from 'next/link';
import Image from 'next/image';
import { Gallery } from 'react-grid-gallery';
import styles from '../styles/Home.module.css';
import validPageNumbers from '../public/ct_id_valid_page_numbers.json';

export const URLListBuilder = (root_url: string, ct_id: string, pages: string[]) => {
  let out: string[] = [];
  for (var page_num of pages) {
    out.push(root_url + ct_id + '_' + page_num + '.jpg');
  }
  return out;
};

export const s3_root_dir =
  'https://multimodal-contract-segmentation-contracts-bucket.s3.amazonaws.com/cuad_imgs_labeled/';

export const s3_root_dir_unlabeled = 
  'https://multimodal-contract-segmentation-contracts-bucket.s3.amazonaws.com/cuad_images_unlabeled/';

export default function ListContracts() {
  let labelled_img_urls: Map<string, Array<string>> = new Map<string, Array<string>>();
  const ct_id_list = ['ct_200', 'ct_308', 'ct_308', 'ct_353', 'ct_345', 'ct_327', 'ct_506'];
  let urlList_200 = URLListBuilder(s3_root_dir, 'ct_200', validPageNumbers['ct_200']);
  let urlList_308 = URLListBuilder(s3_root_dir, 'ct_308', validPageNumbers['ct_308']);
  let urlList_327 = URLListBuilder(s3_root_dir, 'ct_327', validPageNumbers['ct_327']);
  let urlList_345 = URLListBuilder(s3_root_dir, 'ct_345', validPageNumbers['ct_345']);
  let urlList_353 = URLListBuilder(s3_root_dir, 'ct_353', validPageNumbers['ct_353']);
  let urlList_506 = URLListBuilder(s3_root_dir, 'ct_506', validPageNumbers['ct_506']);

  let gallery_test: {
    src: string;
    width: number;
    height: number;
    tags: {
      value: JSX.Element;
      title: string;
    }[];
  }[] = [
    {
      src: urlList_200[0],
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_200">View Contract</Link>, title: 'View Contract' },
      ],
    },
    {
      src: urlList_308[0],
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_308">View Contract</Link>, title: 'View Contract' },
      ],
    },
    {
      src: urlList_327[0],
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_327">View Contract</Link>, title: 'View Contract' },
      ],
    },
    {
      src: urlList_345[0],
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_345">View Contract</Link>, title: 'View Contract' },
      ],
    },
    {
      src: urlList_353[0],
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_353">View Contract</Link>, title: 'View Contract' },
      ],
    },
    {
      src: urlList_506[0],
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_506">View Contract</Link>, title: 'View Contract' },
      ],
    },
  ];
  return (
    <div className={styles.container} style={{backgroundColor: 'white', color: 'black', padding: '3em'}}>
      <h2>
        <Link href="/" >Back to home</Link>
      </h2>
      <div className={styles.title} style={{paddingBottom: '0.5em'}}>
        List of Contracts
      </div>

      <Gallery images={gallery_test}></Gallery>
    </div>
  );
}
