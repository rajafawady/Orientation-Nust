// pages/index.js
import ZoomedImage from '../components/ZoomedImage';
import Layout from "../components/Layout";
import { Toaster } from 'react-hot-toast';


export default function Game() {

  return (
    <Layout title={"Game"}>
      <Toaster position='bottom-left' />

      <div className="flex items-center justify-center w-full min-h-screen relative"  >
        <div className="flex flex-col items-center justify-start gap-4 sm:gap-0 min-h-screen w-full sm:px-10">
          <ZoomedImage />
        </div>
      </div>
    </Layout >
  );
}
