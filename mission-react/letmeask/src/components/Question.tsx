import { ReactNode } from 'react';
import '../styles/question.scss';
import className from 'classnames';

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionsProps) {
  return (
    <div
      className={className(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className='user-info'>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
