import styled from "@emotion/styled";

export interface IProgress {
  percent: number;
}

export interface IExperience{
  progress: number;
}

export const Container = styled.div`
  display: flex;

  align-items:center;

  span{
    font-size:1rem;
  }
`;

export const ProgressContainer = styled.div`
  background: var(--gray-line);

  position: relative;
  flex: 1;

  height: 4px;
  border-radius: 4px;

  margin: 0 1.5rem;
`;

export const Progress = styled.div<IProgress>`
  width:${({percent}) => percent + '%'};
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

Progress.defaultProps = { percent: 0 };

export const Experience = styled.div<IExperience>`
  position: absolute;
  top:12px;
  left: ${({ progress }) => `${progress}%`};
  transform: translateX(-50%);
`;

Experience.defaultProps = { progress: 0 };
