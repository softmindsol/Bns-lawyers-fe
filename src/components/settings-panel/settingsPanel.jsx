import { AiOutlineSetting } from "react-icons/ai";

const SettingsPanel = ({ isDarkMode }) => {
    const quickActions = [
      'Extract Clauses',
      'Find Precedents',
      'Risk Analysis',
      'Compare Versions'
    ];
  
    const settings = [
      {
        label: 'Analysis Mode',
        options: ['Comprehensive Review', 'Quick Scan', 'Risk Assessment']
      },
      {
        label: 'Language Style',
        options: ['Professional', 'Technical', 'Simplified']
      },
      {
        label: 'Citation Format',
        options: ['Bluebook', 'APA', 'Chicago']
      }
    ];
  
    return (
      <div className={`w-80 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} border-l p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Settings</h3>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <AiOutlineSetting className="w-5 h-5" />
          </button>
        </div>
  
        <div className="space-y-6">
          {settings.map((setting, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-2">{setting.label}</label>
              <select 
                className={`w-full p-3 rounded-xl ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100'
                } border-0`}
              >
                {setting.options.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
          ))}
  
          <div className="border-t pt-6">
            <h4 className="text-sm font-medium mb-4">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`p-3 rounded-xl text-sm text-center transition-all ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default SettingsPanel;