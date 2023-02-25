type shortYOption = 't' | 'c' | 'b';

type shortXOption = 'l' | 'm' | 'r';

type shortCoordinates = `${shortXOption}${shortYOption}`;

export type cellId = `${shortCoordinates}[${shortCoordinates}]`