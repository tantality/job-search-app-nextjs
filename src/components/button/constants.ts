export enum BUTTON_IMPORTANCE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum UI_ITEM_STATE {
  ACTIVE = 'active',
  HOVER = 'hover',
  PRESSED = 'pressed',
}

export const BUTTON_PROPERTIES: Record<BUTTON_IMPORTANCE, Record<UI_ITEM_STATE, { backgroundColor: string; color: string }>> = {
  [BUTTON_IMPORTANCE.PRIMARY]: {
    [UI_ITEM_STATE.ACTIVE]: { backgroundColor: '#5E96FC', color: '#FFFFFF' },
    [UI_ITEM_STATE.HOVER]: { backgroundColor: '#92C1FF', color: '#FFFFFF' },
    [UI_ITEM_STATE.PRESSED]: { backgroundColor: '#3B7CD3', color: '#FFFFFF' },
  },
  [BUTTON_IMPORTANCE.SECONDARY]: {
    [UI_ITEM_STATE.ACTIVE]: { backgroundColor: '#DEECFF', color: '#3B7CD3' },
    [UI_ITEM_STATE.HOVER]: { backgroundColor: '#DEECFF', color: '#5E96FC' },
    [UI_ITEM_STATE.PRESSED]: { backgroundColor: '#DEECFF', color: '#3B7CD3' },
  },
};
