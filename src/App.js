import './App.css';
import Header from './componets/Header';
import NoteForm from './componets/NoteForm';
import NotesList from './componets/NotesList';

function App() {
  return (
    <div className="App">
      <Header />
      <NoteForm />
      <NotesList/>
    </div>
  );
}

export default App;
