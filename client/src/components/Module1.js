import '../App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from '../codes/codes.js'
import codeBlocks from '../codes/codeblocks';
import answers from '../codes/answers.js'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { CodeBlock, dracula } from "react-code-blocks";



const Module1 = () => {
  const [code, setCode] = useState(codes[1])
  const [result, setResult] = useState()
  const [spinner, setSpinner] = useState(false)


  const handleSubmit = async () => {
    setSpinner(true)

    if (code === answers[2]) {
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
            defaultValue= {codes[2]}
            onChange={ (e) => setCode(e)}
          />
        </div>
        <div className="column">
          <h2>
            DEMO TASK: SET DATA
          </h2>
          <br></br>

          <p className='texts'>

            <br></br>
            Task is:
            <p>The Account type is used when an instruction is interested in the deserialized data of the account. Consider the following example where we set some data in an account:</p>
            <p>
              <li>First, create u64 data variable in MyAccount struct like here:
              <CodeBlock
                text={codeBlocks[2]}
                language="rust"
                showLineNumbers={false}
                theme={dracula}
                wrapLines
              />
              </li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              <CodeBlock
                text={codeBlocks[3]}
                language="rust"
                showLineNumbers={false}
                theme={dracula}
                wrapLines
              />
              </li>
              <li>
                Lastly, in the set_data function, set input data to MyAccount's data:
                  <CodeBlock
                  text={codeBlocks[4]}
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

export default Module1;
