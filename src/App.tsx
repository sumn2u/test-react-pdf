import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PDFReader from 'react-typescript-pdf-reader'

class App extends Component<{}> {
  render() {
    let pdfUrl:string = 'https://arxiv.org/pdf/1801.10031v1.pdf'
    return (
      <PDFReader pdfUrl={pdfUrl} />
    );
  }
}

export default App;
