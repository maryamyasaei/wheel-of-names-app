import React, { useState, useRef, useEffect } from 'react';
import { Input, EditableWrapper, EditIcon } from './styles';
import { FiEdit } from 'react-icons/fi';

export const Question = () => {
  const [question, setQuestion] = useState('What is your question?');
  const [editable, setEditable] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // ✅ Create ref

  useEffect(() => {
    if (editable && inputRef.current) {
      inputRef.current.focus(); // ✅ Focus when entering edit mode
    }
  }, [editable]);

  const handleClick = () => {
    setEditable(true);
  };

  const handleBlur = () => {
    setEditable(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setEditable(false);
    }
  };

  return (
    <div>
      {editable ? (
        <Input
          ref={inputRef} // ✅ Use proper ref
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <EditableWrapper onClick={handleClick}>
          <h1>{question}</h1>
          <EditIcon>
            <FiEdit />
          </EditIcon>
        </EditableWrapper>
      )}
    </div>
  );
};
