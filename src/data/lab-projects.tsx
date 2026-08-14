import {
  Bot,
  Radar,
  Cog,
  ScanEye,
  Plane,
  Waypoints,
  Dog,
  Brain,
  Cpu,
  Gauge,
  Network,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export type LabProject = {
  slug: string;
  week: number;
  title: string;
  morphology: string;
  simulation: string;
  focus: string;
  tech: string[];
  overview: string;
  icon: LucideIcon;
  accent: string; // hex accent used for hover glow / tech badges
};

// 12-Week Build-First Roadmap — Robotics Simulation Lab.
// Each entry maps to a vertical slice: model a robot, wire sensors,
// run a simulator, add control/learning, measure, document.
export const labProjects: LabProject[] = [
  {
    slug: "amr-foundations",
    week: 1,
    title: "AMR Foundations — ROS 2 Robot in Gazebo",
    morphology: "Autonomous mobile robot",
    simulation: "Gazebo + ROS 2",
    focus: "Kinematics, sensing, teleop",
    tech: ["ROS 2", "Gazebo", "URDF/Xacro", "TF2", "Differential drive"],
    overview:
      "A minimal differential-drive robot modeled from scratch — correct URDF, LiDAR and IMU, a simple drive controller, and teleop with LiDAR visualized in RViz.",
    icon: Bot,
    accent: "#a855f7",
  },
  {
    slug: "amr-slam-nav2",
    week: 2,
    title: "AMR Autonomy — SLAM + Nav2",
    morphology: "Autonomous mobile robot",
    simulation: "Gazebo + ROS 2 + Nav2",
    focus: "SLAM, path planning, obstacle avoidance",
    tech: ["ROS 2", "SLAM Toolbox", "Nav2", "Gazebo"],
    overview:
      "Turning the base robot into an autonomous one: LiDAR-based SLAM to build and save a map, then Nav2 for goal-directed navigation with obstacle avoidance.",
    icon: Radar,
    accent: "#22d3ee",
  },
  {
    slug: "manipulator-kinematics",
    week: 3,
    title: "Manipulator Foundations — 4-DOF Arm Kinematics",
    morphology: "Manipulator",
    simulation: "PyBullet / Gazebo",
    focus: "Forward & inverse kinematics, joint control",
    tech: ["PyBullet", "FK/IK", "DH parameters", "PID"],
    overview:
      "Model my planned 4-DOF belt-drive arm in simulation before hardware debugging: forward and inverse kinematics, joint-space PID, and end-effector trajectory tracking.",
    icon: Cog,
    accent: "#10b981",
  },
  {
    slug: "manipulation-vision",
    week: 4,
    title: "Manipulation — Motion Planning + Vision Pick-and-Place",
    morphology: "Manipulator",
    simulation: "Gazebo + ROS 2 + MoveIt",
    focus: "Perception → planning → control",
    tech: ["MoveIt 2", "OpenCV", "RGB-D", "ROS 2"],
    overview:
      "Turning the arm into a manipulation system: detect an object with an RGB-D camera, plan a collision-free approach, and execute a pick-and-place with grasp checking.",
    icon: ScanEye,
    accent: "#38bdf8",
  },
  {
    slug: "uav-px4",
    week: 5,
    title: "Aerial Robotics — PX4 Quadrotor Autonomy",
    morphology: "UAV",
    simulation: "Gazebo + PX4 SITL",
    focus: "State estimation, offboard control",
    tech: ["PX4 SITL", "ROS 2", "Gazebo", "Offboard mode"],
    overview:
      "A single simulated quadrotor under PX4 SITL: understand vehicle state and sensors, command takeoff and waypoints, and control it autonomously via ROS 2.",
    icon: Plane,
    accent: "#f59e0b",
  },
  {
    slug: "uav-swarm-avce",
    week: 6,
    title: "Multi-UAV — AVCE Swarm Exploration",
    morphology: "UAV swarm",
    simulation: "Gazebo + PX4",
    focus: "Decentralized exploration, 3D mapping",
    tech: ["Decentralized swarm", "PPO", "3D mapping", "ROS 2"],
    overview:
      "My AVCE work turned into a reproducible multi-UAV benchmark: decentralized swarm rules, per-agent local observations aggregated into a global map, with coverage and path metrics.",
    icon: Waypoints,
    accent: "#f43f5e",
  },
  {
    slug: "quadruped-control",
    week: 7,
    title: "Legged Robotics — Quadruped Dynamics + PD Locomotion",
    morphology: "Legged / quadruped",
    simulation: "MuJoCo",
    focus: "Dynamics, PD control, gait generation",
    tech: ["MuJoCo", "Joint-space PD", "Gait generator"],
    overview:
      "Understanding the mechanics of locomotion before asking an RL agent to learn it: a simulated quadruped stands and walks with a classical PD controller and simple gait.",
    icon: Dog,
    accent: "#84cc16",
  },
  {
    slug: "quadruped-rl",
    week: 8,
    title: "Legged Learning — PPO Quadruped in Gymnasium",
    morphology: "Legged / quadruped",
    simulation: "MuJoCo + Gymnasium + SB3",
    focus: "Reinforcement learning",
    tech: ["Gymnasium", "Stable-Baselines3", "PPO", "MuJoCo"],
    overview:
      "Learning RL from the environment-design side: a Gymnasium-compatible quadruped env with a justified reward, trained with PPO across multiple seeds with saved curves.",
    icon: Brain,
    accent: "#8b5cf6",
  },
  {
    slug: "humanoid-rl",
    week: 9,
    title: "Humanoid — Standing and Locomotion in MuJoCo",
    morphology: "Humanoid",
    simulation: "MuJoCo + Gymnasium",
    focus: "Whole-body control and RL",
    tech: ["MuJoCo", "Gymnasium", "PPO", "Whole-body control"],
    overview:
      "The most transferable part of humanoid work: first standing, then controlled locomotion, with a learning baseline, disturbance experiments, and failure-mode analysis.",
    icon: Cpu,
    accent: "#ec4899",
  },
  {
    slug: "model-based-mpc",
    week: 10,
    title: "Model-Based Robotics — System ID + MPC",
    morphology: "Reusable (AMR / UAV / legged)",
    simulation: "MuJoCo / Gazebo",
    focus: "Model-based control",
    tech: ["System identification", "MPC", "PID baseline"],
    overview:
      "A principled contrast to model-free PPO: learn a dynamics model from simulation data, predict short horizons, and close the loop with MPC benchmarked against a PID baseline.",
    icon: Gauge,
    accent: "#06b6d4",
  },
  {
    slug: "knowledge-robotics",
    week: 11,
    title: "Knowledge-Based Robotics — World Model + Task Planning",
    morphology: "AMR + manipulator",
    simulation: "Gazebo + ROS 2",
    focus: "Knowledge representation, symbolic planning",
    tech: ["World model", "Task planner", "State machine", "ROS 2"],
    overview:
      "The bridge from low-level autonomy to intelligent agents: give a robot explicit knowledge of objects, rooms, and capabilities, then plan and execute a multi-step task.",
    icon: Network,
    accent: "#f97316",
  },
  {
    slug: "embodied-ai-capstone",
    week: 12,
    title: "Embodied AI Capstone — Multi-Robot Mission",
    morphology: "AMR + UAV + manipulator",
    simulation: "Gazebo + ROS 2 (+ MuJoCo)",
    focus: "Knowledge + planning + learned control",
    tech: ["Multi-robot", "Task-level planning", "ROS 2", "MuJoCo"],
    overview:
      "The whole portfolio in one mission: multiple robot types cooperate under a shared task-level plan, each using its specialized autonomy stack, with a measured success rate.",
    icon: Boxes,
    accent: "#e11d48",
  },
];

export function getLabProject(slug: string): LabProject | undefined {
  return labProjects.find((p) => p.slug === slug);
}
