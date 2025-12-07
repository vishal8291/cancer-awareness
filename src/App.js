import Header from "./components/Header";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Quotes from "./components/Quotes";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <ContactForm />
      <Quotes />
    </div>
  );
}

export default App;
