import {style_background, style_ipp_h, style_ipp_mt, style_ipp_ph} from '../styles';
import NavBar from '../NavBar';
import {parallelOpenmpPic, parallelPthreadsPic} from '../images';

function Parallel() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>           
        <a
          href="https://github.com/lhosk/Parallel-Computing" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Parallel Computing on an HPC
        </a>
      </div>

      {/* Main Text */}
      <div style={{...style_ipp_mt, whiteSpace: 'pre-wrap'}}>
        {`
          tools: openmp, pthreads, c++, hpc, slurm, bash, winscp, putty, multi-threading, 
          parallel computing, performance benchmarking, job scheduling

          this was my first HPC and multi-threaded/parallel computing related project
          using openMP and pthreads, we determined the time taken to evaluate a function per thread

          unfortunately, this was one of the few projects i did before HPC access was taken away
          i hope to do more work on HPCs and parallel threaded environments when i have the time

          jobs were run via Slurm using an HPC at UNCC 
          the outputs are shown in the graphs below as openMP and pthreads respectively
        `
          .trim()
          .split('\n')
          .map((line, i) => (
            <p
              key={i}
              style={{
                margin: line.trim() === '' ? '0.5rem 0' : '0.3rem 0',
                lineHeight: '1.4',
              }}
            >
              {line.trim() === '' ? '\u00A0' : line.trim()}
            </p>
          ))}
      </div>

      {/* Photos */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(30rem, 40vw, 40rem)', paddingBottom: '2rem'}}>
        <img src={parallelOpenmpPic} style={{...style_ipp_ph, width: 'clamp(300px, 35vw, 550px)', marginTop: '2rem'}} alt="parallel_open_mp" />
        <img src={parallelPthreadsPic} style={{...style_ipp_ph, width: 'clamp(300px, 35vw, 550px)', marginTop: '2rem'}} alt="parallel_pthreads" />
      </div>

    </div>
  );
}

export default Parallel