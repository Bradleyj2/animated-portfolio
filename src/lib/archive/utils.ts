export function generateCaseId(date = new Date()) {
  const y = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const rnd = Math.floor(Math.random() * 900 + 100);
  return `MB-${y}-${mm}${dd}-${rnd}`;
}

export function downloadReceipt(caseId: string, formData: any) {
  const receipt = {
    caseId,
    timestamp: new Date().toISOString(),
    submittedBy: formData.name,
    email: formData.email,
    subject: formData.subject || 'No subject',
    message: formData.message,
    type: formData.type || 'Other'
  };

  const blob = new Blob([JSON.stringify(receipt, null, 2)], { 
    type: 'application/json' 
  });
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `case-file-${caseId}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function playSound(soundType: 'shuffle' | 'stamp' | 'drawer', volume = 0.3) {
  // Simple sound simulation using Web Audio API
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Different frequencies for different sounds
  const frequencies = {
    shuffle: [200, 150, 100],
    stamp: [300, 250],
    drawer: [150, 200, 250]
  };
  
  const freq = frequencies[soundType];
  oscillator.frequency.setValueAtTime(freq[0], audioContext.currentTime);
  
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
}