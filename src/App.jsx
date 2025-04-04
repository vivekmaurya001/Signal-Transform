import React, { useState } from 'react'
import TimeDomainChart from './components/TimeDomainChart'
import FrequencyDomainChart from './components/FrequencyDomainChart'
import SignalParameters from './components/SignalParameters'

import sin from '@stdlib/math/base/special/sin'
import cos from '@stdlib/math/base/special/cos'
import tan from '@stdlib/math/base/special/tan'
import sqrt from '@stdlib/math/base/special/sqrt'
import cabs from '@stdlib/math/base/special/cabs'
import add from '@stdlib/complex/float64/base/add'
import Complex128 from '@stdlib/complex/float64/ctor'
import PI from '@stdlib/constants/float64/pi'
import Float64Array from '@stdlib/array/float64'

function App() {
  const [signalType, setSignalType] = useState('square')
  const [frequency, setFrequency] = useState(5)
  const [amplitude, setAmplitude] = useState(1)
  const [phase, setPhase] = useState(0)

  const timeData = generateTimeData(signalType, frequency, amplitude, phase)

  const freqData = computeFrequencySpectrum(timeData.samples, timeData.timestep)

  return (
    <div className="app-container">
      <h1>Signal and Fourier Transform Visualization</h1>

      <div className="charts-container">
        <div className="chart-card">
          <div className="chart-header">Time Domain Signal</div>
          <TimeDomainChart timeData={timeData} />
        </div>

        <div className="chart-card">
          <div className="chart-header">Frequency Domain (Amplitude Spectrum)</div>
          <FrequencyDomainChart freqData={freqData} />
        </div>
      </div>

      <div className="parameters-container">
        <SignalParameters
          signalType={signalType}
          setSignalType={setSignalType}
          frequency={frequency}
          setFrequency={setFrequency}
          amplitude={amplitude}
          setAmplitude={setAmplitude}
          phase={phase}
          setPhase={setPhase}
        />
      </div>
    </div>
  )
}

function generateTimeData(signalType, frequency, amplitude, phase) {
  const sampleRate = 1000; 
  const duration = 1;  
  const timestep = 1 / sampleRate;
  const time = new Float64Array(sampleRate * duration)
  const samples = new Float64Array(sampleRate * duration)

  for (let i = 0; i < sampleRate * duration; i++) {
    const t = i * timestep;
    let value;

    if (signalType === 'square') {
      const raw = sin(2 * PI * frequency * t + phase);
      value = raw >= 0 ? amplitude : -amplitude;
    } else if (signalType === 'sine') {
      value = amplitude * sin(2 * PI * frequency * t + phase);
    } else if (signalType === 'cos') {
      value = amplitude * cos(2 * PI * frequency * t + phase);
    } else if (signalType === 'tan') {
      value = amplitude * tan(2 * PI * frequency * t + phase);
      if (value > 10) value = 10;
      else if (value < -10) value = -10;
    } else if (signalType === 'constant') {
      value = amplitude;
    } else {
      value = amplitude * sin(2 * PI * frequency * t + phase);
    }

    time[i] = t;
    samples[i] = value;
  }

  return { time, samples, timestep };
}

function computeFrequencySpectrum(samples, timestep) {
  const N = samples.length
  const freqData = []
  
  for (let k = 0; k < N / 2; k++) {
    let sum = new Complex128(0,0);
    for (let n = 0; n < N; n++) {
      const theta = -2 * PI * k * n / N;
      const w = new Complex128( cos(theta)*samples[n], sin(theta)*samples[n] );
      sum = add( sum, w );
    }
    const magnitude = cabs(sum);
    const frequency = k / (N * timestep)
    freqData.push({ frequency, magnitude })
  }

  return freqData
}

export default App
