type shortYOption = 't' | 'c' | 'b';

type shortXOption = 'l' | 'm' | 'r';

type shortCoordinates = `${shortYOption}${shortXOption}`;

export type cellId = `${shortCoordinates}[${shortCoordinates}]`