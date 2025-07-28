// ContentPanel component placeholder
export default function ContentPanel() {
  const panel = document.createElement('div');
  panel.className = 'bg-gray-700 rounded p-4 min-h-[120px] mt-4';
  panel.textContent = 'Content Panel will display story and lesson content here.';
  return panel;
}
