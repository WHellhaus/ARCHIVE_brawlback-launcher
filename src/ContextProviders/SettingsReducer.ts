export interface Launcher {
  elfPath: string,// path for .elf file
  sdCardPath: string,// path for sd.raw that contains correct codes for the launcher
  name: string,// name for launcher (i.e. P+, vBrawl, etc.)
  iconPath?: string,
}

// settings for the launcher that map to certain variables in config.json 
export interface SettingsData {
  autoStartGame: boolean,// whether to star dolphin ro automatically start selected launcher
  selectedLauncherIndex: number,// which launcher to use when auto starting game
  launchers: Launcher[]// array of launchers
}

export type Action =
  | { type: 'SELECT_LAUNCHER', index: number }
  | { type: 'ADD_LAUNCHER', launcher: Launcher }
  | { type: 'LOAD_SETTINGS', settings: SettingsData }

export function settingsReducer(state: SettingsData, action: Action) {
  switch(action.type) {
    // changes what launcher is selected when playing game
    case 'SELECT_LAUNCHER' : {
      if (action.index <= state.launchers.length) {
        return {
          ...state,
          selectedLauncherIndex: action.index
        }
      }
      return state;
    }
    // adds launcher to array
    case 'ADD_LAUNCHER' : {
      return {
        ...state, 
        launchers: [...state.launchers, action.launcher]
      }
    }
    // completely overrides sate with new settings object
    case 'LOAD_SETTINGS' : {
      return action.settings;
    }

    default: {
      return state;
    }

  }
}