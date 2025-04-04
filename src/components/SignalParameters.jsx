import React from 'react'

function SignalParameters({
  signalType,
  setSignalType,
  frequency,
  setFrequency,
  amplitude,
  setAmplitude,
  phase,
  setPhase
}) {
  return (
    <>
      <h2>Signal Parameters</h2>

      <div className="parameter-row">
        <label>Signal Type:</label>
        <select
          value={signalType}
          onChange={(e) => setSignalType(e.target.value)}
        >
          <option value="sine">Sine Wave</option>
          <option value="square">Square Wave</option>
          <option value="cos">Cosine Wave</option>
          <option value="tan">Tangent Wave</option>
          <option value="constant">Constant</option>
        </select>
      </div>

      <div className="parameter-row">
        <label>Frequency (Hz): {frequency}</label>
        <input
          type="range"
          min="1"
          max="50"
          step="0.1"
          value={frequency}
          onChange={(e) => setFrequency(Number(e.target.value))}
        />
      </div>

      <div className="parameter-row">
        <label>Amplitude: {amplitude}</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={amplitude}
          onChange={(e) => setAmplitude(Number(e.target.value))}
        />
      </div>

      <div className="parameter-row">
        <label>Phase (rad): {phase.toFixed(2)}</label>
        <input
          type="range"
          min="0"
          max="6.28"
          step="0.01"
          value={phase}
          onChange={(e) => setPhase(Number(e.target.value))}
        />
      </div>

    </>
  )
}

export default SignalParameters
