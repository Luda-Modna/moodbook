import BookSection from './components/BookSection';

import MoodPanel from './components/MoodPanel';
import Nav from './components/Nav';
import './App.css';

function App () {
  return (
    <>
      <div className='app'>

        <Nav />
        <main className='main'>
          <section className='content'>
            <BookSection />
            <MoodPanel />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
