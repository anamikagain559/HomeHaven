import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const BlogPage = () => {

    useEffect(() => {
        document.title = "Blog Page";
      });
  return (
  <>




  <Navbar></Navbar>
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="  https://i.ibb.co/sv7wgv1/Vipp-coldhawaii-livingroom02.webp" alt="Blog post" className="mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-4">SIMPLE SPRING HOME UPDATES</h2>
            <p className="text-gray-600 mb-4">Apologies for the lack of blog content recently - I'm working on a big and very exciting project that's taking up most of my time. I hope to be able to share more details with you soon, but in the meantime I wanted to put together a quick post rounding up some simple spring updates that I've made around the home . . .</p>
            <Link to="/blog/post1" className="text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://i.ibb.co/wcFzkYg/ATD-Retail-2024-FEATURE.webp" alt="Blog post" className="mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-4">MINIMALIST GARDEN INSPIRATION WITH ‘AH’ OUTDOOR FURNITURE FROM CARL HANSEN & SØN </h2>
            <p className="text-gray-600 mb-4">[Advertisement – this is a paid partnership with Carl Hansen & Søn, but all words and opinions are my own] It's that time of year when many of us start to think about getting our gardens, terraces or balconies ready for the warmer months ahead, and today I'm excited to share some inspiration for minimalist outdoor furniture in collaboration with Carl Hansen & Søn . . .</p>
            <Link to="/blog/post2" className="text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://i.ibb.co/cFPGKst/New-design-finds-March-2024-Audo-CPH-FEATURE.webp" alt="Blog post" className="mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-4">THE BEST SCENTED CANDLES FOR SPRING</h2>
            <p className="text-gray-600 mb-4">Despite a brief return to sleet and snow last week, spring has arrived here in Bristol - and that means it's time for my seasonal round-up of the best scented candles. For me candles aren't just a winter thing, and I love selecting fragrances that suit my mood and the season. Around now I start swapping the smoky, spicy notes that I tend to favour during the colder months for lighter scents . . .</p>
            <Link to="/blog/post3" className="text-blue-500 hover:underline">Read more</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Blog posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://i.ibb.co/RSMVMJg/Spring-candles-2022-feature.webp" alt="Blog post" className="mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-4">NEW DESIGN FINDS | MARCH 2024</h2>
            <p className="text-gray-600 mb-4">As always, the start of a new month means it's time for my regular round-up of design finds, and February's trade fairs and design weeks mean I have plenty of beautiful launches to share with you this time around. So, read on for details of versatile furniture and lighting, new twists on existing favourites, a Danish design classic that's about to be reintroduced, and two pieces created with . . .</p>
            <Link to="/blog/post1" className="text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://i.ibb.co/br5tVqg/Carl-Hansen-outdoor-furniture-FEATURE.webp" alt="Blog post" className="mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-4">NEW LAUNCHES & REDISCOVERED CLASSICS FROM &TRADITION</h2>
            <p className="text-gray-600 mb-4">Several of my favourite design names have just released details of their spring-summer 2024 collections and one in particular immediately caught my eye: that of Danish brand &Tradition, which is known for its mix of timeless Scandinavian pieces and contemporary creations by a raft of international designers . . .</p>
            <Link to="/blog/post2" className="text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://i.ibb.co/jwdcR9S/Spring-home-updates-2024-FEATURE.webp" alt="Blog post" className="mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-4">VIPP COLD HAWAII – A DESIGN-LED COASTAL HIDEAWAY IN DENMARK</h2>
            <p className="text-gray-600 mb-4">This month's round-up of design news included a look at the new 'V3' kitchen from Vipp and today I want to share more of the stunning beach house where it was photographed. The latest opening in Vipp's growing collection of bookable guest accommodation in Scandinavia and beyond, it sits among the dunes of Denmark's Thy National Park - often dubbed 'Cold Hawaii' because of its windswept beaches . . .</p>
            <Link to="/blog/post3" className="text-blue-500 hover:underline">Read more</Link>
          </div>
        </div>
      </main>
      <Footer></Footer>
  </>
  );
};

export default BlogPage;
