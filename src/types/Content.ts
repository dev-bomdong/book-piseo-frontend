export type BookInfo = {
	title: string;
	link: string;
	image: string;
	author: string;
	discount: string;
	publisher: string;
	pubdate: string;
	isbn: string;
	description: string;
};

export type Contents = {
	contentsTitle: string;
	contentsText: string;
	bookInfo: BookInfo;
	teamId: string;
	teamName?: string;
};
