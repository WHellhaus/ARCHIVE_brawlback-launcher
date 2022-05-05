import { useEffect, createContext, ReactNode, useContext, useReducer, useMemo } from 'react';
import { SettingsData, settingsReducer, Action } from './SettingsReducer';

export interface ISettingsContext {
  state: SettingsData,
  dispatch: React.Dispatch<Action>
}

export const SettingsContext = createContext<ISettingsContext>({} as ISettingsContext);

export const useSettingsContext = () => {
  return useContext(SettingsContext);
}

// default settings; maps to wherever we install these files when packaged
const defaultSettings: SettingsData = {
  autoStartGame: true,
  selectedLauncherIndex: 0,
  launchers: [
    {
      elfPath: 'P+ .elf relative directory file path',
      sdCardPath: 'P+ sd.raw relative directory file path',
      name: 'P+',
      iconPath: 'assets/pplus.webp'
    },
    {
      elfPath: 'vBrwl .elf relative directory file path',
      sdCardPath: 'vBrawl sd.raw relative directory file path',
      name: 'vBrawl'
    }
  ]
}

interface Wrapper {children?: ReactNode}
const SettingsContextProvider: React.FC<Wrapper> = ({children}: Wrapper) => {
  const [state, dispatch] = useReducer(settingsReducer, defaultSettings);

  // gets settings from config.json file via electron
  useEffect(() => {
    const getConfigSettings = async() => {
      window.api.getConfigSettings().then(
        (data: SettingsData) => {
          dispatch({type: 'LOAD_SETTINGS', settings: data})
      }).catch((error) => {
        console.log(error);
      });
    }
    
    getConfigSettings();
  })

  const contextValue: ISettingsContext = useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch])

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider;