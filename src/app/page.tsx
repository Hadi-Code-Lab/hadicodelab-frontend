import HomeHeaderComponent from '@/components/PagesComponents/Home/HomeHeaderComponent';
import HomeTopArticles from '@/components/PagesComponents/Home/HomeTopArticles';

export default function Home() {
  return (
    <main className='text-center'>
      <HomeHeaderComponent />
      <HomeTopArticles />
    </main>
  );
}
