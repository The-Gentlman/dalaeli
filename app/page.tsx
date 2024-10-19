'use client';

import {
  Main,
  MainContainer,
  MainFooter,
  MainGrid,
  MainHeader,
} from "@/components/main";
import { ProjectItem } from "@/components/project";
import { homePageConfig, projectPageConfig } from "@/config";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import HeaderImage from '@/components/main/HeaderImage';
import Logos from "@/components/main/Logos";
import HomePosts from "@/components/main/HomePosts";
const HomePage = async () => (
    <>
    <MainHeader />
    <MainContainer>
      <MainGrid>
      <HeaderImage />

        <Main>
          <Logos />
          {" "}
          <div className="mx-auto mb-4 text-center">
          <Image
            src={homePageConfig.profileImage ?? ""}
            alt={homePageConfig.profileImageDescription ?? ""}
            width={100}
            height={100}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(256, 256),
            )}`}
            className="mx-auto mb-2 rounded-full bg-white shadow-md ring-1 ring-gray-200 dark:bg-neutral-800/80 dark:ring-gray-600 px-3"
            priority={true}
          />
            <h1 className="mb-2 text-balance font-calsans text-3xl font-light text-slate-900 dark:text-slate-100 my-10">
              {homePageConfig.title}
            </h1>
            <h2></h2>
            <span className="text-balance text-lg leading-8 text-slate-600 dark:text-slate-500">
              {homePageConfig.subTitle}
            </span>
          <div  className="mb-5">
          </div>
          {projectPageConfig.map((project, idx) => (
            <ProjectItem
            project={project}
            isLastItem={idx === projectPageConfig.length - 1}
            />
          ))}
          </div>
          <HomePosts />
        </Main>
      </MainGrid>
    </MainContainer>
    <MainFooter />
  </>
);

export default HomePage;
