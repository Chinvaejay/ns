import * as React from 'react';
import { Dialogs } from '@nativescript/core';

export function ScreenThree() {
  return (
    <flexboxLayout>
      <label className="text-2xl mb-4 font-bold text-center">
        Hello World!
      </label>
      <button onTap={() => Dialogs.alert('Tapped!')}>
        Tap me for an alert
      </button>
    </flexboxLayout>
  );
}
