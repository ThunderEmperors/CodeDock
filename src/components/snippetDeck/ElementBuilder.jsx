import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import './element-builder.css'
import { useDispatch, useSelector } from 'react-redux';
import { elementAdded, elementSelected, elementUpdated, setListUpdated } from '../../features/elementselector/elementsSlice';
import { ReactSortable } from 'react-sortablejs';


const ElementBuilder = () => {

  const dispath = useDispatch();
  const selectedElementId = useSelector(state => state.elementselector.selectedId);
  const elements = useSelector(state => state.elementselector.elements);
  
  const selectedElement = elements.find(el => el.id === selectedElementId);

  const handleSelectElement = (elementId) => {
    dispath(elementSelected(elementId));
    // setSelectedElementId(prevId => prevId === elementId ? null : elementId);
  };

  const handleSetListUpdate = (elementList) => {
    dispath(setListUpdated(elementList));
  }

  const handleCodeChange = (value) => {
    console.log(value);
    dispath(elementUpdated(value));
    
    // setElements(elements.map(el => 
    //   el.id === selectedElementId ? { ...el, code: value } : el
    // ));
  };

  const handleAddElement = () => {
    console.log(elements.map(el => el.id));
    const newId = String(Date.now());
    const newElement = {
      id: newId,
      name: `Element ${elements.length + 1}`,
      code: '<div>New element</div>'
    };
    
    // setElements([...elements, newElement]);
  
    dispath(elementAdded(newElement));
  };

  const handleExport = () => {
    const exportData = {
      elements: elements,
      timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'elements-export.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="element-builder-container flex height-[100vh]">
      <div className="elements-panel">
        <div className="panel-header">
          <h2>Elements</h2>
          <button 
            onClick={handleAddElement}
            className="add-button"
          >
            + Add
          </button>
        </div>
        
        <ReactSortable
          list={elements.map(e => ({ ...e }))}
          setList={handleSetListUpdate}
          tag="div"
          className="elements-list"
          // onChoose={(e) => {
          //   const chosenId = elements[e.oldIndex].id;
          //   dispath(elementSelected(chosenId));
          // }}
        >
          {elements.map((element) => (
            <div key={element.id}
              className={`element-item ${
              selectedElementId === element.id ? 'selected' : ''}`}
              onClick={() => {

                if(selectedElementId === element.id){
                  handleSelectElement(null);
                } else{
                  handleSelectElement(element.id);
                }
                
              }}
            >
            <span className="drag-handle">≡</span>
            <span>{element.name}</span>
          </div>
          ))}
        </ReactSortable>

        
        <button 
          onClick={handleExport}
          className="export-button"
        >
          Export JSON
        </button>
      </div>
      
      <div className="editor-panel">
        {selectedElement ? (
          <>
            <div className="panel-header">
              <h2>Editing: {selectedElement.name}</h2>
            </div>
            <div className="code-editor-container">
              <Editor
                height="100%"
                defaultLanguage="html"
                value={selectedElement.code}
                onChange={handleCodeChange}
                theme="vs-light"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on'
                }}
              />
            </div>
          </>
        ) : (
          <div className="empty-state">
            <p>Select an element to edit</p>
          </div>
        )}
      </div>
      
      <div className="preview-panel h-[100vh]">
        <div className="panel-header">
          <h2>Full Code Preview</h2>
        </div>
        <pre className="code-preview">
          {elements.map(element => element.code).join('\n\n')}
        </pre>
      </div>
    </div>
  );
};

export default ElementBuilder;
