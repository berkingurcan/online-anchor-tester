import '../App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from '../codes/codes.js'
import answers from '../codes/answers.js'
import codeBlocks from '../codes/codeblocks'

import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { CodeBlock, dracula } from "react-code-blocks";




const Module0 = () => {
  const [code, setCode] = useState(codes[1])
  const [result, setResult] = useState()
  const [spinner, setSpinner] = useState(false)

  const handleSubmit = async () => {
    setSpinner(true)

    if (code === answers[1]) {
      setResult('Congratulations! You Passed all tests! Go to next task')
    } else {
      setResult('Sorry, your code is incorrect! Please try again')
    }
   
    setSpinner(false)
  }

  return (
    <ChakraProvider>
      <div className="App">
        <div className="column">
          <Editor
            height="90vh"
            theme="vs-dark"
            defaultLanguage="rust"
            defaultValue= {codes[1]}
            onChange={ (e) => setCode(e)}
          />
        </div>
        <div className="column">
          <h2>
            MODULE 0: DEMO HELLO WORLD ANCHOR
          </h2>
          <br></br>

          <p className='texts'>

            <br></br>
            You can see simple Anchor program
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>
              <li>First task is change function name to hello_world and add message to greet :)
              <CodeBlock
                text={codeBlocks[1]}
                language="rust"
                showLineNumbers={false}
                theme={dracula}
                wrapLines
              />
              </li>
            </p>
          </p>

          <Button onClick={handleSubmit} colorScheme='teal' size='md'>
            Test Code
          </Button>
          <div>
             {spinner ? <Spinner /> : result}
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Module0;
