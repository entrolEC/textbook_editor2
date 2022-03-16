import React, { createContext, useMemo, useState } from 'react';

export const TextbookContext = createContext({
  stepIndex: 0,
  itemIndex: 0,
  setIndex: () => {},
  addStep: () => {},
  deleteStep: () => {},
  addItem: () => {},
  deleteStep: () => {},
  addDescription: () => {},
  addImage: () => {},
  addCode: () => {},
  addTable: () => {},
  deleteDescription: () => {},
  setDescription: () => {}
});