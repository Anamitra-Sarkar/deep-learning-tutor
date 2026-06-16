import React, { useState, useEffect, useRef } from 'react';
import { tutorData } from './data';

// --- VISUALIZERS ---

const NeuralNetworkVisualizer = () => {
  const [layers, setLayers] = useState([3, 4, 3]);
  const [learningRate, setLearningRate] = useState(0.01);
  const [weights, setWeights] = useState({});

  const layerPositions = [15, 50, 85];
  
  const renderNeurons = (layerIndex) => {
    const numNeurons = layers[layerIndex];
    const x = layerPositions[layerIndex];
    const yPositions = [];
    
    for (let i = 0; i < numNeurons; i++) {
      const y = 50 + (i * 12) - ((numNeurons - 1) * 6);
      yPositions.push({ x, y });
    }
    return yPositions;
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm mt-6 mb-8">
      <h4 className="text-xl font-bold text-slate-800 mb-2 text-center">Interactive Neural Network Architecture</h4>
      <p className="text-sm text-slate-500 mb-6 text-center">Adjust the number of neurons in each layer to see the network structure.</p>

      <div className="flex justify-center mb-6">
        <svg viewBox="0 0 100 150" className="w-full max-w-sm bg-slate-50 rounded-lg border border-slate-100 shadow-inner">
          {/* Input Layer */}
          <text x="15" y="25" className="text-[10px] font-bold fill-slate-600">Input Layer</text>
          {renderNeurons(0).map((neuron, idx) => (
            <circle key={`in-${idx}`} cx={neuron.x} cy={neuron.y} r={3} fill="#3b82f6" />
          ))}

          {/* Hidden Layer 1 */}
          <text x="50" y="25" className="text-[10px] font-bold fill-slate-600">Hidden Layer 1</text>
          {renderNeurons(1).map((neuron, idx) => (
            <circle key={`h1-${idx}`} cx={neuron.x} cy={neuron.y} r={3} fill="#10b981" />
          ))}

          {/* Hidden Layer 2 */}
          <text x="85" y="25" className="text-[10px] font-bold fill-slate-600">Hidden Layer 2</text>
          {renderNeurons(2).map((neuron, idx) => (
            <circle key={`h2-${idx}`} cx={neuron.x} cy={neuron.y} r={3} fill="#f59e0b" />
          ))}

          {/* Output Layer */}
          <text x="15" y="135" className="text-[10px] font-bold fill-slate-600">Output Layer</text>
          {renderNeurons(2).map((neuron, idx) => (
            <circle key={`out-${idx}`} cx={neuron.x} cy={neuron.y} r={3} fill="#ef4444" />
          ))}

          {/* Connections (simplified) */}
          {renderNeurons(0).map((n1, i) => renderNeurons(1).map((n2, j) => (
            <line key={`c1-${i}-${j}`} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="#cbd5e1" strokeWidth="0.3" />
          )))}
          {renderNeurons(1).map((n1, i) => renderNeurons(2).map((n2, j) => (
            <line key={`c2-${i}-${j}`} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="#cbd5e1" strokeWidth="0.3" />
          )))}
          {renderNeurons(2).map((n1, i) => renderNeurons(2).map((n2, j) => (
            <line key={`c3-${i}-${j}`} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="#cbd5e1" strokeWidth="0.3" />
          )))}
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
        {layers.map((count, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <label className="text-xs font-bold text-slate-600 mb-1">
              Layer {idx + 1}: {count} neurons
            </label>
            <input
              type="range"
              min="1"
              max="6"
              step="1"
              value={count}
              onChange={(e) => {
                const newLayers = [...layers];
                newLayers[idx] = parseInt(e.target.value);
                setLayers(newLayers);
              }}
              className="w-full accent-blue-800"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
        <div className="text-sm font-bold text-slate-700 mb-2">Network Info:</div>
        <div className="text-xs text-slate-600">
          Total Layers: {layers.length}<br />
          Total Neurons: {layers.reduce((a, b) => a + b, 0)}<br />
          Connections: {layers.reduce((sum, l, i) => {
            if (i < layers.length - 1) {
              return sum + l * layers[i + 1];
            }
            return sum;
          }, 0)}
        </div>
      </div>
    </div>
  );
};

const FeedForwardVisualizer = () => {
  const [layers, setLayers] = useState([4, 5, 3]);
  const [activation, setActivation] = useState('relu');

  const layerPositions = [10, 50, 90];
  
  const renderNeurons = (layerIndex) => {
    const numNeurons = layers[layerIndex];
    const x = layerPositions[layerIndex];
    const yPositions = [];
    
    for (let i = 0; i < numNeurons; i++) {
      const y = 50 + (i * 10) - ((numNeurons - 1) * 5);
      yPositions.push({ x, y });
    }
    return yPositions;
  };

  const activationInfo = {
    relu: { name: 'ReLU', formula: 'max(0, x)', color: '#3b82f6' },
    sigmoid: { name: 'Sigmoid', formula: '1/(1+e⁻ˣ)', color: '#10b981' },
    tanh: { name: 'Tanh', formula: '(eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)', color: '#f59e0b' }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm mt-6 mb-8">
      <h4 className="text-xl font-bold text-slate-800 mb-2 text-center">Feed Forward Network</h4>
      <p className="text-sm text-slate-500 mb-6 text-center">Adjust layers and activation functions to see the flow of information.</p>

      <div className="flex justify-center mb-6">
        <svg viewBox="0 0 100 120" className="w-full max-w-sm bg-slate-50 rounded-lg border border-slate-100 shadow-inner">
          {/* Input Layer */}
          <text x="10" y="15" className="text-[10px] font-bold fill-slate-600">Input</text>
          {renderNeurons(0).map((neuron, idx) => (
            <circle key={`in-${idx}`} cx={neuron.x} cy={neuron.y} r={2.5} fill="#3b82f6" />
          ))}

          {/* Hidden Layer */}
          <text x="50" y="15" className="text-[10px] font-bold fill-slate-600">Hidden</text>
          {renderNeurons(1).map((neuron, idx) => (
            <circle key={`h-${idx}`} cx={neuron.x} cy={neuron.y} r={2.5} fill="#10b981" />
          ))}

          {/* Output Layer */}
          <text x="90" y="15" className="text-[10px] font-bold fill-slate-600">Output</text>
          {renderNeurons(2).map((neuron, idx) => (
            <circle key={`out-${idx}`} cx={neuron.x} cy={neuron.y} r={2.5} fill="#ef4444" />
          ))}

          {/* Information Flow Arrows */}
          {renderNeurons(0).map((n1, i) => renderNeurons(1).map((n2, j) => (
            <line key={`c1-${i}-${j}`} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="#cbd5e1" strokeWidth="0.3" />
          )))}
          {renderNeurons(1).map((n1, i) => renderNeurons(2).map((n2, j) => (
            <line key={`c2-${i}-${j}`} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="#cbd5e1" strokeWidth="0.3" />
          )))}
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-6">
        <div>
          <label className="text-xs font-bold text-slate-600 mb-1">Activation Function</label>
          <select 
            value={activation}
            onChange={(e) => setActivation(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            <option value="relu">ReLU</option>
            <option value="sigmoid">Sigmoid</option>
            <option value="tanh">Tanh</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 mb-1">Number of Hidden Neurons</label>
          <input
            type="range"
            min="2"
            max="8"
            step="1"
            value={layers[1]}
            onChange={(e) => {
              const newLayers = [...layers];
              newLayers[1] = parseInt(e.target.value);
              setLayers(newLayers);
            }}
            className="w-full accent-blue-800"
          />
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
        <div className="text-sm font-bold text-slate-700 mb-2">Activation Function: {activationInfo[activation].name}</div>
        <div className="text-xs text-slate-600 font-mono">{activationInfo[activation].formula}</div>
      </div>
    </div>
  );
};

const TrainingVisualizer = () => {
  const [loss, setLoss] = useState(2.5);
  const [epoch, setEpoch] = useState(0);
  const [learningRate, setLearningRate] = useState(0.01);
  const [history, setHistory] = useState([{ epoch: 0, loss: 2.5 }]);

  const step = () => {
    const newLoss = loss * (1 - learningRate);
    const newEpoch = epoch + 1;
    setLoss(newLoss);
    setEpoch(newEpoch);
    setHistory([...history, { epoch: newEpoch, loss: newLoss }]);
  };

  const reset = () => {
    setLoss(2.5);
    setEpoch(0);
    setHistory([{ epoch: 0, loss: 2.5 }]);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm mt-6 mb-8">
      <h4 className="text-xl font-bold text-slate-800 mb-2 text-center">Training Process Visualization</h4>
      <p className="text-sm text-slate-500 mb-6 text-center">Adjust learning rate to see how fast the loss decreases during training.</p>

      <div className="flex justify-center mb-6">
        <svg viewBox="0 0 300 150" className="w-full max-w-sm bg-slate-50 rounded-lg border border-slate-100 shadow-inner">
          {/* Axes */}
          <line x1="20" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <text x="150" y="145" className="text-[10px] fill-slate-500">Epoch</text>
          <text x="10" y="70" className="text-[10px] fill-slate-500" transform="rotate(-90, 10, 70)">Loss</text>

          {/* Loss curve */}
          <path d="M 20 130 Q 150 130 280 20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
          
          {/* Current point */}
          {history.map((h, idx) => {
            const x = 20 + (h.epoch * 26);
            const y = 130 - (h.loss * 40);
            return (
              <circle key={idx} cx={x} cy={y} r={idx === history.length - 1 ? 4 : 2} fill="#ef4444" />
            );
          })}
        </svg>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 w-full max-w-xs">
          <span className="text-sm font-bold text-slate-700">Learning Rate: {learningRate}</span>
          <input type="range" min="0.001" max="0.1" step="0.001" value={learningRate} onChange={(e) => setLearningRate(parseFloat(e.target.value))} className="flex-1 accent-blue-800" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-xs font-bold text-slate-600">Current Epoch</div>
            <div className="text-2xl font-black text-blue-800">{epoch}</div>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-lg border border-red-100">
            <div className="text-xs font-bold text-slate-600">Current Loss</div>
            <div className="text-2xl font-black text-red-600">{loss.toFixed(4)}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={step} className="px-6 py-2 text-sm bg-blue-800 text-white font-bold rounded-md hover:bg-blue-900">Take Step</button>
          <button onClick={reset} className="px-6 py-2 text-sm bg-slate-200 text-slate-700 font-bold rounded-md hover:bg-slate-300">Reset</button>
        </div>
      </div>
    </div>
  );
};

const CRFVisualizer = () => {
  const [states, setStates] = useState(['S1', 'S2', 'S3', 'S4']);
  const [transitions, setTransitions] = useState({
    'S1->S2': 0.8, 'S1->S3': 0.2, 'S2->S1': 0.1, 'S2->S3': 0.9, 'S3->S2': 0.3, 'S3->S4': 0.7, 'S4->S3': 0.6
  });

  const statePositions = [
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 250, y: 50 },
    { x: 150, y: 150 }
  ];

  const transitionsList = [
    { from: 0, to: 1, prob: transitions['S1->S2'] },
    { from: 0, to: 2, prob: transitions['S1->S3'] },
    { from: 1, to: 0, prob: transitions['S2->S1'] },
    { from: 1, to: 2, prob: transitions['S2->S3'] },
    { from: 2, to: 1, prob: transitions['S3->S2'] },
    { from: 2, to: 3, prob: transitions['S3->S4'] },
    { from: 3, to: 2, prob: transitions['S4->S3'] }
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm mt-6 mb-8">
      <h4 className="text-xl font-bold text-slate-800 mb-2 text-center">Conditional Random Field (CRF)</h4>
      <p className="text-sm text-slate-500 mb-6 text-center">CRF models sequential dependencies between states. Adjust transition probabilities to see how the model learns sequences.</p>

      <div className="flex justify-center mb-6">
        <svg viewBox="0 0 300 200" className="w-full max-w-sm bg-slate-50 rounded-lg border border-slate-100 shadow-inner">
          {/* Transitions */}
          {transitionsList.map((t, idx) => {
            const fromPos = statePositions[t.from];
            const toPos = statePositions[t.to];
            const opacity = Math.min(0.3 + t.prob * 0.7, 1);
            return (
              <line key={`${t.from}-${t.to}`} x1={fromPos.x} y1={fromPos.y} x2={toPos.x} y2={toPos.y} stroke="#ef4444" strokeWidth={t.prob * 3} opacity={opacity} />
            );
          })}

          {/* States */}
          {statePositions.map((pos, idx) => (
            <g key={`state-${idx}`}>
              <circle cx={pos.x} cy={pos.y} r={15} fill="#3b82f6" opacity="0.3" />
              <text x={pos.x} y={pos.y + 5} textAnchor="middle" className="text-[10px] font-bold fill-slate-700">{states[idx]}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm mx-auto">
        {Object.keys(transitions).map((key) => (
          <div key={key} className="flex flex-col items-center">
            <label className="text-xs font-bold text-slate-600 mb-1">{key}: {transitions[key].toFixed(1)}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={transitions[key]}
              onChange={(e) => setTransitions({ ...transitions, [key]: parseFloat(e.target.value) })}
              className="w-full accent-blue-800"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ArchCompareVisualizer = () => {
  const [view, setView] = useState('cnn');

  const architectures = {
    cnn: {
      title: 'Convolutional Neural Network (CNN)',
      description: 'Uses convolutional layers to extract spatial features from images. Pooling reduces dimensions.',
      features: ['Convolutional Layers', 'Pooling Layers', 'Fully Connected Layers', 'Translation Invariance']
    },
    rnn: {
      title: 'Recurrent Neural Network (RNN)',
      description: 'Processes sequential data by maintaining hidden state. Good for time series and language.',
      features: ['Hidden State', 'Sequential Processing', 'Memory of Previous Steps', 'Variable Length Input']
    },
    transformer: {
      title: 'Transformer',
      description: 'Uses self-attention to process sequences in parallel. Revolutionary for NLP.',
      features: ['Self-Attention', 'Positional Encoding', 'Parallel Processing', 'Long-range Dependencies']
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm mt-6 mb-8">
      <h4 className="text-xl font-bold text-slate-800 mb-2 text-center">Deep Learning Architecture Comparison</h4>
      <p className="text-sm text-slate-500 mb-6 text-center">Click to switch between different architectures.</p>

      <div className="flex justify-center gap-2 mb-6">
        {Object.keys(architectures).map(key => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${
              view === key ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="max-w-sm mx-auto">
        <div className="text-center mb-4">
          <h5 className="text-lg font-bold text-slate-800">{architectures[view].title}</h5>
          <p className="text-sm text-slate-600 mt-2">{architectures[view].description}</p>
        </div>

        <div className="space-y-2">
          {architectures[view].features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                idx === 0 ? 'bg-blue-100 text-blue-800' : idx === 1 ? 'bg-green-100 text-green-800' : idx === 2 ? 'bg-yellow-100 text-yellow-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {idx + 1}
              </div>
              <span className="text-sm text-slate-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <div className="text-xs text-blue-800">
            <strong>Best For:</strong> {view === 'cnn' ? 'Image processing, Computer Vision' : view === 'rnn' ? 'Time series, Language, Sequences' : 'Natural Language Processing, Translation'}
          </div>
        </div>
      </div>
    </div>
  );
};

const VisualizerSelector = ({ type }) => {
  if (type === 'neural_net') return <NeuralNetworkVisualizer />;
  if (type === 'ffnn') return <FeedForwardVisualizer />;
  if (type === 'training') return <TrainingVisualizer />;
  if (type === 'crf') return <CRFVisualizer />;
  if (type === 'arch_compare') return <ArchCompareVisualizer />;
  return null;
};

// --- CHAT WIDGET ---

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am your Interactive Study Assistant. I have loaded the syllabus and materials. Let me know if you need any mathematical breakdown or concept explanation!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const formatText = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.trim() === '') return <br key={i} />;
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={i}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
          <br />
        </span>
      );
    });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const contextText = tutorData.map(topic => 
        `Chapter: ${topic.title}\nSimplified Concept: ${topic.easyConcept}\nExam Q&A:\n${topic.examQuestions.map(q => `Q: ${q.q}\nA: ${q.a}`).join('\n')}`
      ).join('\n\n--- \n\n');
      
      const systemMessage = {
        role: 'system',
        content: `You are an expert AI professor tutoring a 3rd-semester university student in Soft Computing. You have strict instructions to be incredibly helpful, clear, and interactive. 
        
Your knowledge base is strictly defined by the COURSE MATERIALS provided below. Use this exact knowledge to answer their questions. If they don't understand a math problem or concept from the site, break it down further, provide a step-by-step calculation, or explain the equations more clearly. Use simple markdown for formatting. 

COURSE MATERIALS:
${contextText}`
      };

      const apiMessages = [systemMessage, ...newMessages.map(m => ({ role: m.role, content: m.content }))];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer __GROQ_API_KEY__'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: apiMessages,
          temperature: 0.7,
        })
      });

      const data = await response.json();
      if(data.choices && data.choices[0]){
         setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
      } else {
         setMessages(prev => [...prev, { role: 'assistant', content: 'Oops, something went wrong fetching the answer. Please try again.' }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Network error connecting to the Study Assistant.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end animate-fade-in">
      {isOpen && (
        <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl w-[calc(100vw-2rem)] sm:w-[400px] mb-4 flex flex-col overflow-hidden transition-all duration-300" style={{ height: '500px', maxHeight: '70vh' }}>
          <div className="bg-blue-800 text-white p-3 sm:p-4 font-bold flex justify-between items-center shadow-md">
            <span className="flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Interactive Study Assistant
            </span>
            <button onClick={toggleChat} className="text-white hover:text-blue-200 focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3 rounded-xl shadow-sm text-[13px] sm:text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-800 text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'}`}>
                  {formatText(msg.content)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] p-3 rounded-xl bg-white text-slate-500 border border-slate-200 rounded-tl-none italic text-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask a question..."
              className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-blue-800 text-white rounded-lg px-3 sm:px-4 py-2 hover:bg-blue-900 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={toggleChat}
        className="bg-blue-800 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-blue-900 transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        )}
      </button>
    </div>
  );
};

// --- APP & UI COMPONENTS ---

const QuizComponent = ({ quizData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [longAnswers, setLongAnswers] = useState({});
  const [longFeedback, setLongFeedback] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [randomizedQuiz, setRandomizedQuiz] = useState([]);

  useEffect(() => {
    // Shuffle the quizData and select up to 10 questions
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    setRandomizedQuiz(shuffled.slice(0, 10));
    // Reset state for new quiz
    setSelectedAnswers({});
    setLongAnswers({});
    setLongFeedback({});
    setShowResults(false);
  }, [quizData]);

  const handleSelect = (qIndex, optionIndex) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const handleLongText = (qIndex, text) => {
    setLongAnswers(prev => ({ ...prev, [qIndex]: text }));
  };

  const checkAnswers = () => setShowResults(true);

  const evaluateLongAnswer = async (qIdx, question, userAnswer) => {
    if (!userAnswer || !userAnswer.trim()) return;
    setLongFeedback(prev => ({ ...prev, [qIdx]: { loading: true } }));

    try {
      const systemMessage = {
        role: 'system',
        content: `You are a strict but fair university professor grading a 3rd-semester student's answer for a Deep Learning exam.
        Question: "${question}"
        Student's Answer: "${userAnswer}"
        
        Task:
        1. Evaluate if the student's answer is correct, partially correct, or incorrect based on university-level Deep Learning principles.
        2. If correct, approve it explicitly and briefly state why.
        3. If incorrect or missing key details, tell the student exactly what to add or change. Do not just give the answer, provide constructive feedback on their specific text.
        4. Keep your feedback concise, direct, and under 3-4 sentences. Format key terms in bold.`
      };

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer __GROQ_API_KEY__'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [systemMessage],
          temperature: 0.3,
        })
      });

      const data = await response.json();
      if(data.choices && data.choices[0]){
         setLongFeedback(prev => ({ ...prev, [qIdx]: { loading: false, feedback: data.choices[0].message.content } }));
      } else {
         setLongFeedback(prev => ({ ...prev, [qIdx]: { loading: false, feedback: 'Error grading answer.' } }));
      }
    } catch (err) {
      setLongFeedback(prev => ({ ...prev, [qIdx]: { loading: false, feedback: 'Network error while grading.' } }));
    }
  };

  const mcqQuestions = randomizedQuiz.filter(q => q.type === 'mcq' || !q.type);
  const longQuestions = randomizedQuiz.filter(q => q.type === 'long');

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 font-serif">
        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        Random 10-Question Knowledge Check
      </h3>
      
      <div className="space-y-8">
        {/* Render MCQs */}
        {randomizedQuiz.map((qObj, rawIdx) => {
          if (qObj.type === 'long') return null;
          return (
          <div key={rawIdx} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
            <p className="font-semibold text-slate-800 mb-4 text-lg">{rawIdx + 1}. {qObj.q}</p>
            <div className="space-y-2">
              {qObj.options.map((opt, oIdx) => {
                const isSelected = selectedAnswers[rawIdx] === oIdx;
                const isCorrect = oIdx === qObj.answer;
                
                let btnClass = "w-full text-left px-4 py-3 rounded-md border transition-all duration-200 ";
                
                if (!showResults) {
                  btnClass += isSelected ? "bg-slate-100 border-blue-700 text-blue-900 font-medium" : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700";
                } else {
                  if (isCorrect) {
                    btnClass += "bg-emerald-50 border-emerald-500 text-emerald-700 font-medium";
                  } else if (isSelected && !isCorrect) {
                    btnClass += "bg-red-50 border-red-500 text-red-700 font-medium";
                  } else {
                    btnClass += "bg-white border-slate-200 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button 
                    key={oIdx} 
                    onClick={() => handleSelect(rawIdx, oIdx)}
                    className={btnClass}
                    disabled={showResults}
                  >
                    {String.fromCharCode(65 + oIdx)}. {opt}
                  </button>
                );
              })}
            </div>
            
            {showResults && (
              <div className={`mt-4 p-4 rounded-md text-sm ${selectedAnswers[rawIdx] === qObj.answer ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                <span className="font-bold mr-2">{selectedAnswers[rawIdx] === qObj.answer ? "✓ Correct!" : "✗ Incorrect."}</span>
                {qObj.explanation}
              </div>
            )}
          </div>
        )})}

        {/* Render Long Questions */}
        {randomizedQuiz.map((qObj, rawIdx) => {
          if (qObj.type !== 'long') return null;
          const fb = longFeedback[rawIdx];
          
          return (
          <div key={rawIdx} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
            <p className="font-semibold text-slate-800 mb-4 text-lg">{rawIdx + 1}. [Subjective] {qObj.q}</p>
            <textarea
              className="w-full border border-slate-300 rounded-lg p-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[100px]"
              placeholder="Type your exam answer here..."
              value={longAnswers[rawIdx] || ''}
              onChange={(e) => handleLongText(rawIdx, e.target.value)}
            />
            
            <button 
              onClick={() => evaluateLongAnswer(rawIdx, qObj.q, longAnswers[rawIdx])}
              disabled={!longAnswers[rawIdx] || (fb && fb.loading)}
              className="mt-3 bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {fb && fb.loading ? (
                <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Grading Answer...</>
              ) : (
                <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Evaluate Answer</>
              )}
            </button>

            {fb && fb.feedback && (
              <div className="mt-4 p-4 bg-slate-100 border border-blue-100 rounded-md text-sm text-blue-900 leading-relaxed">
                <span className="font-bold block mb-1">👨‍🏫 Professor Feedback:</span>
                <span dangerouslySetInnerHTML={{ __html: fb.feedback.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            )}
          </div>
        )})}
      </div>

      {!showResults && Object.keys(selectedAnswers).length === mcqQuestions.length && mcqQuestions.length > 0 && (
        <button 
          onClick={checkAnswers}
          className="mt-8 w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
        >
          Submit MCQ Answers
        </button>
      )}
    </div>
  );
};

const QuestionCard = ({ q, a, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const formattedAnswer = a.split('\n').map((line, i) => {
    if (line.trim() === '') return <br key={i} />;
    
    // Replace markdown math with styled spans temporarily (simplified)
    const processedLine = line.replace(/\$(.*?)\$/g, (match, p1) => {
      return `<span class="font-mono text-blue-900 bg-slate-100 px-1 rounded">${p1}</span>`;
    });

    const parts = processedLine.split(/(\*\*.*?\*\*)/g);
    return (
      <span key={i}>
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
          }
          return <span key={j} dangerouslySetInnerHTML={{ __html: part }} />;
        })}
        <br />
      </span>
    );
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-4 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        className="w-full text-left p-5 flex justify-between items-start focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-inset"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h4 className="font-semibold text-lg text-slate-800 pr-4 leading-tight">
          <span className="text-blue-700 mr-2">Q{index + 1}.</span>
          {q}
        </h4>
        <span className={`transform transition-transform duration-300 text-slate-400 ${showAnswer ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      <div 
        className={`transition-all duration-500 ease-in-out origin-top ${showAnswer ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 bg-slate-50 border-t border-slate-100 text-slate-700 text-base leading-relaxed">
          {formattedAnswer}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const data = tutorData;


  const filteredData = data.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    topic.easyConcept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    return (
    <>
      <div className="max-w-5xl mx-auto p-4 md:p-8 animate-fade-in relative pb-24">
        <button 
          onClick={handleBack}
          className="mb-6 text-slate-500 hover:text-blue-800 font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Curriculum
        </button>
        
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100">
          <header className="mb-10 pb-6 border-b border-slate-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight font-serif">
              {selectedTopic.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-blue-800 font-bold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Concept Simplified
                </h4>
                <p className="text-blue-900/80 text-sm leading-relaxed">
                  {selectedTopic.easyConcept}
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h4 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Visual & Diagram Guide
                </h4>
                <p className="text-emerald-900/80 text-sm leading-relaxed">
                  {selectedTopic.visualGuide}
                </p>
              </div>
            </div>
          </header>

          <VisualizerSelector type={selectedTopic.hasVisualizer} />

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 font-serif">
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Mathematical Solutions & Q&A
            </h3>
            <div className="space-y-4">
              {selectedTopic.examQuestions.map((item, idx) => (
                <QuestionCard key={idx} q={item.q} a={item.a} index={idx} />
              ))}
            </div>
          </section>

          <section>
            <QuizComponent key={selectedTopic.id} quizData={selectedTopic.quiz} />
          </section>
        </div>
      </div>
      <ChatWidget />
    </>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 py-10 sm:py-16 animate-fade-in relative pb-24">
        <div className="text-center mb-10 sm:mb-16">
          <span className="uppercase tracking-widest text-[10px] sm:text-sm font-bold text-blue-700 mb-2 block">MAKAUT Deep Learning Syllabus</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-serif">
            Deep Learning Mastery
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Deep mathematics, step-by-step algorithms, and interactive study tools to guarantee exam success.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10 sm:mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3 sm:py-4 bg-white border border-slate-200 rounded-xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-base sm:text-lg shadow-sm transition-all duration-300 font-serif"
            placeholder="Search for a topic, concept..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {filteredData.map((topic, idx) => (
            <div 
              key={idx}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setSelectedTopic(topic);
              }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-100 text-blue-800 rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                {topic.hasVisualizer !== 'none' && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    Interactive
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-800 transition-colors leading-tight font-serif">
                {topic.title.replace(/^\d+\.\s*/, '')}
              </h3>
              <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed">
                {topic.easyConcept}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  {topic.examQuestions.length} Math Problems
                </span>
                <span className="text-sm font-bold text-blue-800 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Study Module <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ChatWidget />
    </>
  );
};

export default App;